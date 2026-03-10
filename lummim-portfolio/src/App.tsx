import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <div style={{
      fontFamily:"Arial",
      background:"#0f172a",
      color:"white",
      minHeight:"100vh"
    }}>

      <Hero/>

      <Projects />

      <Contact />

    </div>
  )
}

export default App