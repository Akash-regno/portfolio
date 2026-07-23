export default function Navbar() {
  const handleNavClick = (id) => {
    if (id) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-logo" role="button" tabIndex={0} onClick={() => handleNavClick(null)} onKeyDown={e => e.key==='Enter' && handleNavClick(null)}>
        Akash Ghosh
      </div>
      <div className="right-links">
        <span className="nav-link" role="button" tabIndex={0} onClick={() => handleNavClick('about')}    onKeyDown={e => e.key==='Enter' && handleNavClick('about')}    id="nav-about">About</span>
        <span className="nav-link" role="button" tabIndex={0} onClick={() => handleNavClick('skills')}   onKeyDown={e => e.key==='Enter' && handleNavClick('skills')}   id="nav-skills">Skills</span>
        <span className="nav-link" role="button" tabIndex={0} onClick={() => handleNavClick('projects')} onKeyDown={e => e.key==='Enter' && handleNavClick('projects')} id="nav-projects">Projects</span>
        <span className="nav-link" role="button" tabIndex={0} onClick={() => handleNavClick('contact')}  onKeyDown={e => e.key==='Enter' && handleNavClick('contact')}  id="nav-contact">Contact</span>
      </div>
    </nav>
  )
}
