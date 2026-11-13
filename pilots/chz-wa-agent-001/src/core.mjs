export const TARGET_REPOSITORY = "chelpa/chazeware";
export const TARGET_FILE = "src/content.js";

export function extractMessages(payload, allowedSender) {
  const messages = [];
  for (const entry of payload?.entry ?? []) {
    for (const change of entry?.changes ?? []) {
      for (const item of change?.value?.messages ?? []) {
        if (item?.type !== "text" || item?.from !== allowedSender) continue;
        const text = item.text?.body?.trim();
        if (typeof item.id !== "string" || !text || text.length > 800) continue;
        messages.push({ id: item.id, from: item.from, text });
      }
    }
  }
  return messages;
}

export async function verifyMetaSignature(raw, header, secret) {
  if (!secret || !/^sha256=[a-f0-9]{64}$/i.test(header ?? "")) return false;
  const bytes = Uint8Array.from(header.slice(7).match(/../g), h => parseInt(h, 16));
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
  return crypto.subtle.verify("HMAC", key, bytes, new TextEncoder().encode(raw));
}

export function applyExactPatch(source, find, replace) {
  if (typeof find !== "string" || typeof replace !== "string" ||
      !find.trim() || find.length > 2500 || replace.length > 2500 ||
      find === replace) throw new Error("invalid_patch");
  const position = source.indexOf(find);
  if (position < 0 || source.indexOf(find, position + find.length) !== -1) {
    throw new Error("patch_must_match_exactly_once");
  }
  const result = source.slice(0, position) + replace + source.slice(position + find.length);
  if (result.length > 50000) throw new Error("file_too_large");
  return result;
}

export async function branchForMessage(id) {
  const bytes = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(id));
  return "chz-wa-" + Array.from(new Uint8Array(bytes)).slice(0, 10)
    .map(x => x.toString(16).padStart(2, "0")).join("");
}

export function base64Encode(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode(...bytes.slice(i, i + 8192));
  }
  return btoa(binary);
}

export function base64Decode(value) {
  const raw = atob(value.replace(/\s/g, ""));
  return new TextDecoder().decode(Uint8Array.from(raw, c => c.charCodeAt(0)));
}

export function validateModelPlan(plan) {
  if (!plan || !["answer", "edit"].includes(plan.action) ||
      typeof plan.answer !== "string" || plan.answer.length > 1200 ||
      typeof plan.find !== "string" || typeof plan.replace !== "string") {
    throw new Error("invalid_model_output");
  }
  if (plan.action === "edit" && (!plan.find || plan.find === plan.replace)) {
    throw new Error("invalid_edit");
  }
  return plan;
}

export const PLAN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    action: { type: "string", enum: ["answer", "edit"] },
    answer: { type: "string" },
    find: { type: "string" },
    replace: { type: "string" }
  },
  required: ["action", "answer", "find", "replace"]
};
