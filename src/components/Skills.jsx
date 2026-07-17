const SKILLS = [
  {
    category: 'Languages',
    items: ['C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend & DB',
    items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git & GitHub', 'VS Code', 'REST APIs', 'Vercel', 'Render'],
  },
]

export default function Skills() {
  return (
    <section className="skills-sec" id="skills">
      <div className="wrapper">
        <h2 className="section-heading reveal">Skills</h2>
        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <div className={`skill-category reveal reveal-delay-${i + 1}`} key={group.category}>
              <h3 className="skill-cat-title">{group.category}</h3>
              <div className="skill-list">
                {group.items.map(item => (
                  <span className="skill-item" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
