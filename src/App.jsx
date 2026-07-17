import { useEffect, useRef, useState } from 'react'
import LoadingScreen from './components/LoadingScreen.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [view, setView] = useState('home') // 'home' | 'projects'

  useEffect(() => {
    if (!loaded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [loaded])

  return (
    <>
      <LoadingScreen onComplete={() => setLoaded(true)} />
      <Navbar currentView={view} onViewChange={setView} />
      <main>
        {view === 'home' ? (
          <>
            <Hero loaded={loaded} />
            <About />
            <Skills />
            <Experience />
          </>
        ) : (
          <ProjectsPage />
        )}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
