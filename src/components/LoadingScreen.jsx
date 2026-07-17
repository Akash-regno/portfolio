import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const TEXT = 'Welcome to the portfolio of'

export default function LoadingScreen({ onComplete }) {
  const screenRef = useRef(null)
  const wordsRef  = useRef(null)

  useEffect(() => {
    const el    = screenRef.current
    const words = wordsRef.current
    if (!el || !words) return

    // Grab all individual char spans
    const chars = words.querySelectorAll('.ls-char')

    const tl = gsap.timeline({
      onComplete: () => slideOut(el, onComplete),
    })

    // 1. Screen fade in from black (already black, just ensure opacity)
    tl.set(el, { opacity: 1 })

    // 2. Animate each character up from below with smooth stagger
    tl.fromTo(
      chars,
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: {
          each: 0.032,
          from: 'start',
        },
      },
      0.3  // start after 0.3s
    )

    // 3. Hold for a moment after last char appears
    tl.to({}, { duration: 0.7 })

    // 4. All chars fade out together (drift up slightly)
    tl.to(chars, {
      y: '-30%',
      opacity: 0,
      duration: 0.55,
      ease: 'power3.in',
      stagger: {
        each: 0.018,
        from: 'start',
      },
    })

    return () => tl.kill()
  }, [onComplete])

  function slideOut(el, cb) {
    cb() // Trigger Hero animation at the start of the slide-out
    gsap.to(el, {
      yPercent: -100,
      duration: 0.9,
      ease: 'power4.inOut',
      onComplete: () => {
        el.style.display = 'none'
      },
    })
  }

  // Split TEXT into words → each word is a flex container of char spans
  // Each char span is wrapped in an overflow:hidden clip div
  const wordNodes = TEXT.split(' ').map((word, wi) => (
    <span className="ls-word" key={wi}>
      {word.split('').map((ch, ci) => (
        <span className="ls-char-wrap" key={ci}>
          <span className="ls-char">{ch}</span>
        </span>
      ))}
      {/* Space between words */}
      <span className="ls-space">&nbsp;</span>
    </span>
  ))

  return (
    <div className="loading-screen" ref={screenRef}>
      <div className="loading-bg" />
      <div className="loading-content">
        <div className="ls-text" ref={wordsRef}>
          {wordNodes}
        </div>
      </div>
    </div>
  )
}
