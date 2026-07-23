import GooeyNav from './GooeyNav'

export default function Navbar() {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className="navbar" id="navbar">
      <div
        className="nav-logo"
        role="button"
        tabIndex={0}
        onClick={handleLogoClick}
        onKeyDown={e => e.key === 'Enter' && handleLogoClick()}
      >
        Akash Ghosh
      </div>
      <div className="right-links">
        <GooeyNav
          items={navItems}
          particleCount={12}
          particleDistances={[80, 10]}
          particleR={80}
          initialActiveIndex={-1}
          animationTime={500}
          timeVariance={250}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </nav>
  )
}
