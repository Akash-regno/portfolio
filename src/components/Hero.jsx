import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'

export default function Hero({ loaded }) {
  const realH1Ref = useRef(null)
  const paraRef   = useRef(null)
  const bpRef     = useRef(null)
  const hasRun    = useRef(false)

  useEffect(() => {
    if (!loaded || hasRun.current) return
    hasRun.current = true

    const realH1 = realH1Ref.current
    const para   = paraRef.current
    const bp     = bpRef.current

    const splitH1 = new SplitType(realH1.querySelectorAll('.h1-text'), {
      types: 'chars',
      charClass: 'char',
    })
    const chars = splitH1.chars

    const splitPara = new SplitType(para, {
      types: 'lines',
      lineClass: 'para-line',
    })
    const lines = splitPara.lines

    lines.forEach(line => {
      const wrap = document.createElement('div')
      wrap.className = 'line-wrap'
      line.parentNode.insertBefore(wrap, line)
      wrap.appendChild(line)
    })

    const tl = gsap.timeline()

    tl.set(chars, { rotate: 'random(-24, 24, 8)' })

    tl.fromTo(
      chars,
      { y: '110%' },
      { y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.055 },
      0
    )

    tl.to(
      chars,
      { rotate: 0, duration: 0.6, ease: 'power3.inOut', stagger: { each: 0.07, from: 'random' } },
      0.2
    )

    tl.from(
      lines,
      { y: '100%', duration: 0.8, ease: 'power3.out', stagger: 0.08 },
      '-=0.5'
    )

    tl.fromTo(
      '.hero-resume-link',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' },
      '-=0.3'
    )

    tl.set(bp, { opacity: 0 })
    tl.from('.navbar', { opacity: 0, y: -10, duration: 0.5, ease: 'power2.out' }, '-=0.8')
    tl.add(initScrollReveals, '-=0.2')
  }, [loaded])

  function initScrollReveals() {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )
    els.forEach(el => observer.observe(el))
  }

  return (
    <section className="hero-sec" id="hero">
      <div className="hero-contain">

        <h1 className="blueprint" ref={bpRef} aria-hidden="true">
          <span className="h1-text text-1">AKASH</span>
          <span className="h1-text text-2">GHOSH</span>
        </h1>

        <h1 className="real" ref={realH1Ref}>
          <span className="h1-h-line line-1" />
          <span className="h1-h-line line-2" />
          <span className="h1-h-line line-3" />

          <span className="h1-text text-1">AKASH</span>
          <span className="h1-text text-2">GHOSH</span>
        </h1>

        <div className="hero-desc-group">
          <p className="hero-para" ref={paraRef}>
            Full-stack developer building scalable, impactful software with modern web technologies.
          </p>
          <a
            href="https://drive.google.com/file/d/1QScIMOEqNfCgF4RNY4L6lZtSe9XJ8OmQ/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="hero-resume-link"
          >
            View Resume ↗
          </a>
        </div>

      </div>
    </section>
  )
}
