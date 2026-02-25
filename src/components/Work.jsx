export default function Work() {
  const projects = [
    {
      title: 'Scale.ai Enterprise',
      category: 'Web Experience & Strategy',
      year: '2024',
      bgClass: 'work-bg-1'
    },
    {
      title: 'Jasper Brand Evolution',
      category: 'Identity & Narrative',
      year: '2023',
      bgClass: 'work-bg-2'
    },
    {
      title: 'Databricks Intelligence',
      category: 'Campaign',
      year: '2023',
      bgClass: 'work-bg-3'
    },
    {
      title: 'Anthropic Safety',
      category: 'Content Engineering',
      year: '2024',
      bgClass: 'work-bg-4'
    }
  ];

  return (
    <div className="container section-padding" id="work">
      <div className="section-header">
        <h2>Featured Work</h2>
        <a href="#" style={{ borderBottom: '1px solid white', paddingBottom: '5px' }}>
          View Archive
        </a>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-item">
            <div className={`work-image ${project.bgClass}`}>
              {project.bgClass === 'work-bg-3' && (
                <div style={{
                  width: '100px',
                  height: '100px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  transform: 'rotate(45deg)'
                }}></div>
              )}
              {project.bgClass === 'work-bg-4' && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at top right, rgba(50,50,150,0.3), transparent)'
                }}></div>
              )}
            </div>
            <div className="work-title">{project.title}</div>
            <div className="work-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
