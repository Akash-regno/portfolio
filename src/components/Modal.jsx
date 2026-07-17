import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const PROJECTS_LINKS = [
  {
    id: 'proj-apexcare',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'ApexCare',
    href: 'https://github.com/Akash-regno',
  },
  {
    id: 'proj-collabsheet',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M3 9h18M3 15h18M9 3v18M15 3v18" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'CollabSheet',
    href: 'https://github.com/Akash-regno',
  },
  {
    id: 'proj-hoos',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="white" strokeWidth="1.5"/>
        <path d="M8 21h8M12 17v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'HOOS Tracker',
    href: 'https://github.com/Akash-regno',
  },
  {
    id: 'proj-gh',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'GitHub',
    href: 'https://github.com/Akash-regno',
  },
]

const CONNECT_LINKS = [
  {
    id: 'modal-li',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/akash-ghosh0121',
  },
  {
    id: 'modal-gh',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'GitHub',
    href: 'https://github.com/Akash-regno',
  },
  {
    id: 'modal-em',
    icon: (
      <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Email',
    href: 'mailto:akashghosh0121@gmail.com',
  },
]

export default function Modal({ isOpen, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const el = modalRef.current
    if (!el) return

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      gsap.killTweensOf([el, '.modal-link', '.modal-label'])
      gsap.set(el, { display: 'block' })
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.fromTo('.modal-link',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out', stagger: 0.06, delay: 0.15 }
      )
      gsap.fromTo('.modal-label',
        { opacity: 0 },
        { opacity: 0.4, duration: 0.3, ease: 'power2.out', stagger: 0.1, delay: 0.1 }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(el, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => { gsap.set(el, { display: 'none' }) }
      })
    }
  }, [isOpen])

  useEffect(() => {
    const handle = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    window.addEventListener('keydown', handle)
    return () => window.removeEventListener('keydown', handle)
  }, [isOpen, onClose])

  return (
    <div className={`modal${isOpen ? ' is-open' : ''}`} id="modal" ref={modalRef} style={{ display: 'none' }}>
      <div className="modal-bg" onClick={onClose} />
      <button className="modal-close" onClick={onClose} id="modal-close" aria-label="Close modal">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 1L15 15M15 1L1 15" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      <div className="modal-content">
        <div className="wrapper type-2">

          <div className="link-group-div">
            <p className="modal-label">Projects</p>
            <div className="link-group">
              {PROJECTS_LINKS.map(p => (
                <a key={p.id} id={p.id} href={p.href} className="modal-link"
                   target="_blank" rel="noreferrer">
                  <span className="modal-link-icon">{p.icon}</span>
                  <span>{p.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="link-group-div">
            <p className="modal-label">Connect</p>
            <div className="link-group">
              {CONNECT_LINKS.map(l => (
                <a key={l.id} id={l.id} href={l.href} className="modal-link"
                   target={l.href.startsWith('http') ? '_blank' : undefined}
                   rel={l.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <span className="modal-link-icon">{l.icon}</span>
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
