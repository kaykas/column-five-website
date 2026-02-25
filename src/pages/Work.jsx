export default function Work() {
  const caseStudies = [
    {
      client: "HubSpot Ventures",
      title: "Establishing Credibility Through a Sophisticated Brand",
      description: "A comprehensive brand identity and messaging platform for HubSpot's venture arm.",
      tags: ["Brand Identity", "Messaging", "Visual Design"],
      bgColor: "#e8f5e9"
    },
    {
      client: "Instacart Ads",
      title: "From Concept to Market in Two Weeks with 115+ Campaign Assets",
      description: "Rapid campaign development delivering over 115 assets in 14 days.",
      tags: ["Campaign", "Production", "Speed-to-Market"],
      bgColor: "#fff3e0"
    },
    {
      client: "Fieldguide",
      title: "An In-Your-Face Awareness Campaign for an Agentic AI Solution",
      description: "Bold creative that cuts through the noise in the crowded AI space.",
      tags: ["Campaign", "AI/ML", "B2B SaaS"],
      bgColor: "#e3f2fd"
    },
    {
      client: "J.P. Morgan Payments",
      title: "ABM Campaign Drives Growth With Key Accounts",
      description: "Targeted account-based marketing campaign for enterprise payment solutions.",
      tags: ["ABM", "Financial Services", "Enterprise"],
      bgColor: "#f3e5f5"
    },
    {
      client: "Dropbox",
      title: "Go-to-Market Recruiting Strategy Increases Brand Perception 19%",
      description: "Employer branding campaign that significantly improved talent acquisition.",
      tags: ["Employer Branding", "Content Strategy", "Video"],
      bgColor: "#e8eaf6"
    },
    {
      client: "Zendesk",
      title: "Content Hub Drives 40% Increase in Qualified Leads",
      description: "Strategic content hub with SEO optimization and lead generation focus.",
      tags: ["Content Hub", "SEO", "Lead Gen"],
      bgColor: "#fce4ec"
    },
    {
      client: "VideoAmp",
      title: "Thought Leadership Content Positions CEO as Industry Voice",
      description: "Executive content program establishing industry leadership.",
      tags: ["Thought Leadership", "Executive Content", "AdTech"],
      bgColor: "#e0f2f1"
    },
    {
      client: "Vercel",
      title: "Developer-First Content Strategy for Next-Gen Platform",
      description: "Technical content and documentation for developer audiences.",
      tags: ["Developer Content", "Technical Writing", "DevTools"],
      bgColor: "#f1f8e9"
    }
  ];

  return (
    <div className="page work-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Work</h1>
          <p className="page-intro">
            We partner with ambitious B2B brands to create content that drives results.
            From Fortune 500s to fast-growing startups, here's a sample of our work.
          </p>
        </div>
      </section>

      <section className="case-studies-grid section-padding">
        <div className="container">
          <div className="work-grid-full">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="case-study-card-large">
                <div className="case-study-image-large" style={{backgroundColor: study.bgColor}}>
                  <div className="case-study-overlay">
                    <span className="case-study-client">{study.client}</span>
                  </div>
                </div>
                <div className="case-study-content">
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="case-tags">
                    {study.tags.map((tag, tidx) => (
                      <span key={tidx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-cta section-padding bg-white">
        <div className="container">
          <div className="cta-content">
            <h2>Let's create something remarkable</h2>
            <p>Ready to tell your brand story? We're here to help.</p>
            <a href="/contact" className="btn-primary-large">Start a Conversation</a>
          </div>
        </div>
      </section>
    </div>
  );
}
