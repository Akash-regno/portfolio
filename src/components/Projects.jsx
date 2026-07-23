const PROJECTS = [
  {
    num: '01',
    title: 'ApexCare',
    subtitle: 'Full-Stack Hospital Management System',
    desc: [
      'Built a fast, responsive SPA using React.js and Vite with a glassmorphism-inspired UI, ensuring premium UX across desktop and mobile.',
      'Engineered a secure RESTful API using Node.js and Express.js connected to MongoDB; optimized schemas with Mongoose for efficient querying of interconnected collections (Users, Patients, Prescriptions).',
      'Implemented JWT-based Role-Based Access Control (RBAC) mapping users to roles (Admin, Doctor, Nurse, Staff) with dynamic frontend routing and least-privilege API enforcement.',
      'Developed a dynamic QR attendance system where admins generate encrypted daily QR codes (qrcode.react) and staff scan them via device camera (@yudiel/react-qr-scanner).',
      'Built end-to-end clinical and financial modules covering patient lifecycle, digital prescriptions, and billing/invoice management.'
    ],
    tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Akash-regno/apex-care',
    live: 'https://apexcareplus.vercel.app/',
    githubId: 'apexcare-gh',
    liveId: 'apexcare-live',
    image: '/p1.png',
  },
  {
    num: '02',
    title: 'CollabSheet',
    subtitle: 'Real-Time Collaborative Spreadsheet',
    desc: [
      'Built a real-time collaborative spreadsheet with a 100×26 grid, live cell-level sync, presence indicators, and optimistic UI updates using debounced Firestore writes.',
      'Designed a custom formula engine (tokenizer, parser, evaluator) supporting 20+ functions including SUM, AVERAGE, IF, CONCAT, cell references/ranges, and circular reference detection.',
      'Implemented Firebase Authentication (Google + Anonymous sign-in) with Firestore for document storage and Realtime Database for live user presence.',
      'Added cell formatting, drag-to-resize rows/columns, column reordering, keyboard navigation, and CSV/JSON export functionality.',
      'Crafted a modern glassmorphism UI with Canvas-based particle animations, gradient themes, and shadcn/ui components built on Radix UI.'
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    github: 'https://github.com/Akash-regno/collabsheet',
    live: 'https://collabsheet-bice.vercel.app/',
    githubId: 'collabsheet-gh',
    liveId: 'collabsheet-live',
    image: '/p2.png',
  },
  {
    num: '03',
    title: 'HOOS',
    subtitle: 'Job Application Tracker & Organizer',
    desc: [
      'Developed a full-stack SaaS application to track job applications through a 10-stage pipeline with status history, priority tagging, and advanced search/filter/sort.',
      'Built a Chrome Extension (Manifest V3) for one-click job scraping from LinkedIn, Indeed, Glassdoor, and ZipRecruiter.',
      'Implemented a drag-and-drop Kanban task board, FullCalendar scheduling, Recharts analytics dashboard, and real-time notifications.',
      'Integrated Google OAuth 2.0 with NextAuth.js v5, JWT sessions, and MongoDB Adapter for secure, user-scoped data isolation.'
    ],
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Chrome Extension'],
    github: 'https://github.com/Akash-regno/HOOS',
    live: 'https://hoos-beta.vercel.app/',
    githubId: 'hoos-gh',
    liveId: 'hoos-live',
    image: '/p3.png',
  },
]

export default function Projects() {
  return (
    <section className="dark-projects-sec" id="projects">
      <div className="wrapper">
        <h2 className="section-heading reveal">Selected Works</h2>
        
        <div className="projects-page-list">
          {PROJECTS.map((p, idx) => (
            <div className={`project-page-item reveal reveal-delay-${(idx % 3) + 1}`} key={p.num}>
              <div className="pp-content">
                <div className="pp-header">
                  <div>
                    <h3 className="pp-title">{p.title}</h3>
                    <p className="pp-subtitle">{p.subtitle}</p>
                  </div>
                  <div className="pp-links">
                    <a href={p.github} target="_blank" rel="noreferrer" className="proj-link" id={p.githubId}>GitHub ↗</a>
                    <a href={p.live} target="_blank" rel="noreferrer" className="proj-link" id={p.liveId}>Live Demo ↗</a>
                  </div>
                </div>

                <ul className="pp-desc-list">
                  {p.desc.map((bullet, i) => (
                    <li key={i} className="pp-desc-bullet">{bullet}</li>
                  ))}
                </ul>

                <div className="pp-tags">
                  {p.tags.map(t => <span className="ptag" key={t}>{t}</span>)}
                </div>
              </div>

              <a href={p.live} target="_blank" rel="noreferrer" className="pp-image-wrap" id={`${p.liveId}-img`}>
                <img src={p.image} alt={p.title} className="pp-image" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
