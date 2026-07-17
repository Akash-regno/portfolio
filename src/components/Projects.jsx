const PROJECTS = [
  {
    num: '01',
    title: 'ApexCare',
    subtitle: 'Full-Stack Hospital Management System',
    desc: 'A fast, responsive SPA with glassmorphism UI, JWT-based Role-Based Access Control (Admin, Doctor, Nurse, Staff), QR attendance system, and end-to-end clinical & financial modules.',
    tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Akash-regno',
    live: 'https://github.com/Akash-regno',
    githubId: 'apexcare-gh',
    liveId: 'apexcare-live',
  },
  {
    num: '02',
    title: 'CollabSheet',
    subtitle: 'Real-Time Collaborative Spreadsheet',
    desc: 'Real-time collaborative spreadsheet (100×26 grid) with live cell sync, optimistic UI updates, presence indicators, custom formula engine (20+ functions, circular ref detection), Firebase Auth, cell formatting, keyboard navigation, and CSV/JSON export.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/Akash-regno',
    live: 'https://github.com/Akash-regno',
    githubId: 'collabsheet-gh',
    liveId: 'collabsheet-live',
  },
  {
    num: '03',
    title: 'HOOS',
    subtitle: 'Job Application Tracker & Organizer',
    desc: 'Full-stack SaaS tracking job applications through a 10-stage pipeline. Includes a Chrome Extension (Manifest V3) for one-click scraping from LinkedIn, Indeed & more, plus Kanban board and analytics.',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Chrome Extension'],
    github: 'https://github.com/Akash-regno',
    live: 'https://github.com/Akash-regno',
    githubId: 'hoos-gh',
    liveId: 'hoos-live',
  },
]

export default function Projects() {
  return (
    <section className="projects-sec" id="projects">
      <div className="wrapper">
        <h2 className="section-heading reveal">Projects</h2>
        <div className="projects-list">
          {PROJECTS.map((p, i) => (
            <div className={`project-item reveal reveal-delay-${(i % 4) + 1}`} key={p.num}>
              <div className="project-number">{p.num}</div>
              <div className="project-info">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link" id={p.githubId}>GitHub ↗</a>
                <a href={p.live}   target="_blank" rel="noreferrer" className="proj-link" id={p.liveId}>Live ↗</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
