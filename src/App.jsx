import { useState, useEffect } from 'react'
import Navbar     from './components/Navbar.jsx'
import Hero       from './components/Hero.jsx'
import About      from './components/About.jsx'
import Research   from './components/Research.jsx'
import Projects   from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills     from './components/Skills.jsx'
import Footer     from './components/Footer.jsx'

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [navKey, setNavKey] = useState(0)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <Navbar dark={dark} onToggle={() => setDark(d => !d)} onLogoClick={() => setNavKey(k => k + 1)} />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects resetKey={navKey} />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
