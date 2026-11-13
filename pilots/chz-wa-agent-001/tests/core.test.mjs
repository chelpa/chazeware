import test from "node:test";
import assert from "node:assert/strict";
import {
  extractMessages, applyExactPatch, branchForMessage,
  base64Encode, base64Decode, verifyMetaSignature, validateModelPlan
} from "../src/core.mjs";

test("webhook only accepts authorized text", () => {
  const payload = { entry: [{ changes: [{ value: { messages: [
    { id: "wamid.1", from: "56911111111", type: "text", text: { body: "Hola" } },
    { id: "wamid.2", from: "56922222222", type: "text", text: { body: "intruso" } },
    { id: "wamid.3", from: "56911111111", type: "image" }
  ] } }] }] };
  assert.deepEqual(extractMessages(payload, "56911111111"),
    [{ id: "wamid.1", from: "56911111111", text: "Hola" }]);
});
test("patch changes one exact occurrence", () => {
  assert.equal(applyExactPatch("abc def", "def", "xyz"), "abc xyz");
  assert.throws(() => applyExactPatch("a a", "a", "b"), /exactly_once/);
  assert.throws(() => applyExactPatch("abc", "z", "b"), /exactly_once/);
  assert.throws(() => applyExactPatch("abc", "", "x"), /invalid_patch/);
});
test("UTF-8 GitHub content encoding roundtrip", () => {
  assert.equal(base64Decode(base64Encode("Café ☕ CHAZEWARE")), "Café ☕ CHAZEWARE");
});
test("WhatsApp ID gives deterministic safe branch", async () => {
  const branch = await branchForMessage("wamid.X/45");
  assert.match(branch, /^chz-wa-[0-9a-f]{20}$/);
  assert.equal(branch, await branchForMessage("wamid.X/45"));
});
test("model plan validation", () => {
  assert.equal(validateModelPlan({ action: "answer", answer: "ok", find: "", replace: "" }).action, "answer");
  assert.throws(() => validateModelPlan({ action: "edit", answer: "", find: "", replace: "" }));
});
test("Meta webhook signature is checked and tampering rejected", async () => {
  const raw = '{"entry":[]}';
  const secret = "test-app-secret";
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signed = new Uint8Array(await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(raw)));
  const header = "sha256=" + [...signed].map(b => b.toString(16).padStart(2, "0")).join("");
  assert.equal(await verifyMetaSignature(raw, header, secret), true);
  assert.equal(await verifyMetaSignature(raw + "x", header, secret), false);
  assert.equal(await verifyMetaSignature(raw, "sha256=invalid", secret), false);
});
