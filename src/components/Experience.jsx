const EXPERIENCE = [
  {
    period: 'May 2025',
    role: 'Oracle Gen AI Virtual Intern',
    company: 'Oracle · Certification',
    desc: 'Completed Oracle\'s Generative AI Virtual Internship, gaining hands-on expertise in Generative AI fundamentals, large language models, prompt engineering, and AI integration patterns.',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=434DCEAC98429CAC190414E3A03626EA6CA4C43ACD063326903311EA72D86E21',
  },
]

export default function Experience() {
  return (
    <section className="experience-sec" id="experience">
      <div className="wrapper">
        <h2 className="section-heading reveal">Experience &amp; Certifications</h2>
        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <div className={`exp-item reveal reveal-delay-${i + 1}`} key={exp.role}>
              <div className="exp-left">
                <span className="exp-period">{exp.period}</span>
              </div>
              <div className="exp-right">
                <h3 className="exp-role">{exp.role}</h3>
                <p className="exp-company">{exp.company}</p>
                <p className="exp-desc">{exp.desc}</p>
                {exp.link && (
                  <a href={exp.link} target="_blank" rel="noreferrer" className="exp-link">
                    View Credential ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
