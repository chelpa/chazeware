import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { What } from './components/What.jsx'
import { How } from './components/How.jsx'
import { Dynamics } from './components/Dynamics.jsx'
import { Projects } from './components/Projects.jsx'
import { Experiments } from './components/Experiments.jsx'
import { Evidence } from './components/Evidence.jsx'
import { Research } from './components/Research.jsx'
import { SystemMap } from './components/SystemMap.jsx'
import { History } from './components/History.jsx'
import { DevLog } from './components/DevLog.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip" href="#what">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <What />
        <How />
        <Dynamics />
        <Projects />
        <Experiments />
        <Evidence />
        <Research />
        <SystemMap />
        <History />
        <DevLog />
      </main>
      <Footer />
    </>
  )
}

export default App
