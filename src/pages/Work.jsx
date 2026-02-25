export default function Work() {
  const caseStudies = [
    {
      client: "HubSpot Ventures",
      title: "Establishing Credibility Through a Sophisticated Brand",
      description: "A comprehensive brand identity and messaging platform for HubSpot's venture arm.",
      tags: ["Brand Identity", "Messaging", "Visual Design"],
      bgClass: "work-bg-1"
    },
    {
      client: "Instacart Ads",
      title: "From Concept to Market in Two Weeks with 115+ Campaign Assets",
      description: "Rapid campaign development delivering over 115 assets in 14 days.",
      tags: ["Campaign", "Production", "Speed-to-Market"],
      bgClass: "work-bg-2"
    },
    {
      client: "Fieldguide",
      title: "An In-Your-Face Awareness Campaign for an Agentic AI Solution",
      description: "Bold creative that cuts through the noise in the crowded AI space.",
      tags: ["Campaign", "AI/ML", "B2B SaaS"],
      bgClass: "work-bg-3"
    },
    {
      client: "J.P. Morgan Payments",
      title: "ABM Campaign Drives Growth With Key Accounts",
      description: "Targeted account-based marketing campaign for enterprise payment solutions.",
      tags: ["ABM", "Financial Services", "Enterprise"],
      bgClass: "work-bg-4"
    },
    {
      client: "Dropbox",
      title: "Go-to-Market Recruiting Strategy Increases Brand Perception 19%",
      description: "Employer branding campaign that significantly improved talent acquisition.",
      tags: ["Employer Branding", "Content Strategy", "Video"],
      bgClass: "work-bg-1"
    },
    {
      client: "Zendesk",
      title: "Content Hub Drives 40% Increase in Qualified Leads",
      description: "Strategic content hub with SEO optimization and lead generation focus.",
      tags: ["Content Hub", "SEO", "Lead Gen"],
      bgClass: "work-bg-2"
    },
    {
      client: "VideoAmp",
      title: "Thought Leadership Content Positions CEO as Industry Voice",
      description: "Executive content program establishing industry leadership.",
      tags: ["Thought Leadership", "Executive Content", "AdTech"],
      bgClass: "work-bg-3"
    },
    {
      client: "Vercel",
      title: "Developer-First Content Strategy for Next-Gen Platform",
      description: "Technical content and documentation for developer audiences.",
      tags: ["Developer Content", "Technical Writing", "DevTools"],
      bgClass: "work-bg-4"
    }
  ];

  return (
    <div className="page dark-page">
      <section className="page-hero-dark">
        <div className="container">
          <h1>Our Work</h1>
          <p className="page-intro-dark">
            We partner with ambitious B2B brands to create content that drives results.
            From Fortune 500s to fast-growing startups, here's a sample of our work.
          </p>
        </div>
      </section>

      <section className="case-studies-grid section-padding">
        <div className="container">
          <div className="work-grid">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="work-item">
                <div className={`work-image ${study.bgClass}`}>
                  {study.bgClass === "work-bg-3" && (
                    <div style={{
                      width: '100px',
                      height: '100px',
                      border: '1px solid rgba(255,255,255,0.2)',
                      transform: 'rotate(45deg)'
                    }}></div>
                  )}
                  {study.bgClass === "work-bg-4" && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at top right, rgba(50,50,150,0.3), transparent)'
                    }}></div>
                  )}
                </div>
                <div className="work-title">{study.client}</div>
                <h3 className="case-subtitle">{study.title}</h3>
                <p className="case-desc">{study.description}</p>
                <div className="case-tags">
                  {study.tags.map((tag, tidx) => (
                    <span key={tidx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-cta">
        <div>
          <h2>Let's create something remarkable</h2>
          <p style={{ marginTop: '20px' }}>Ready to tell your brand story? We're here to help.</p>
          <div className="footer-links">
            <a href="https://linkedin.com/company/column-five" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/columnfive" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/columnfive" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
        <div className="footer-form">
          <div className="input-group">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Work Email" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Company URL" />
          </div>
          <button>Start a Conversation</button>
        </div>
      </div>
    </div>
  );
}
