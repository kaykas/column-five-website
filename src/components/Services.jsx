export default function Services() {
  const services = [
    {
      id: '01',
      title: 'Strategic Narrative',
      description: 'Defining your distinct POV to cut through the noise of AI-generated commodity content.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5"></rect>
        </svg>
      )
    },
    {
      id: '02',
      title: 'Information Architecture',
      description: 'Structuring content ecosystems that LLMs can parse and humans enjoy navigating.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      )
    },
    {
      id: '03',
      title: 'Production at Scale',
      description: 'High-velocity content production that maintains brand integrity and premium feel.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
      )
    },
    {
      id: '04',
      title: 'SEO for AI Search',
      description: 'Optimizing for the new era of conversational search and answer engines.',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        </svg>
      )
    }
  ];

  return (
    <div className="container section-padding" id="services">
      <div className="section-header">
        <h2>Capabilities</h2>
        <p style={{ textAlign: 'right' }}>
          Engineered for the dual audience:<br />
          Algorithms that rank you, Humans that buy from you.
        </p>
      </div>

      <div className="grid-2">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="bracket-tl"></div>
            <div className="bracket-br"></div>
            <div className="corner-tag tr">{service.id}</div>

            <div className="icon">{service.icon}</div>
            <div>
              <h3>{service.title}</h3>
              <p style={{ fontSize: '0.95rem' }}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
