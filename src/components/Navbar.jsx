import GooeyNav from './GooeyNav'
import GlassSurface from './GlassSurface'

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
        <GlassSurface
          width="auto"
          height="auto"
          borderRadius={14}
          backgroundOpacity={0.12}
          blur={10}
          distortionScale={-120}
          className="logo-glass-surface"
        >
          <span style={{ padding: '0.4rem 0.85rem', fontWeight: 800, letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
            AKASH GHOSH
          </span>
        </GlassSurface>
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
