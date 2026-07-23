export default function Contact() {
  const marqueeItems = Array(6).fill("LET'S BUILD TOGETHER • ")

  return (
    <section className="contact-sec" id="contact">
      <div className="contact-marquee-wrapper reveal">
        <div className="contact-marquee-track">
          {marqueeItems.map((text, i) => (
            <span key={i} className="contact-marquee-item">{text}</span>
          ))}
          {marqueeItems.map((text, i) => (
            <span key={`dup-${i}`} className="contact-marquee-item">{text}</span>
          ))}
        </div>
      </div>

      <div className="wrapper">
        <div className="contact-inner">
          <div className="contact-left">
            <h2 className="contact-heading reveal">
              Let&apos;s<br />Connect.
            </h2>
          </div>

          <div className="contact-right">
            <p className="contact-desc reveal reveal-delay-1">
              Have an interesting project, internship opportunity, or just want to chat about tech?
              I&apos;d love to hear from you — let&apos;s make something great.
            </p>
            <a
              href="mailto:akashghosh0121@gmail.com"
              className="cta-button reveal reveal-delay-2"
              id="email-cta"
            >
              akashghosh0121@gmail.com ↗
            </a>
            <div className="contact-socials reveal reveal-delay-3">
              <a href="https://linkedin.com/in/akash-ghosh0121" target="_blank" rel="noreferrer" id="social-li">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/Akash-regno" target="_blank" rel="noreferrer" id="social-gh">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
