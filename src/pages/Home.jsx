export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero-home">
        <div className="hero-content">
          <p className="hero-subtitle">Storytelling as the last remaining competitive advantage</p>
          <h1>Tell a brand story that wins in AI search</h1>
          <p className="hero-description">
            We help SaaS and AI brands articulate unique perspectives and scale content
            to both human and LLM audiences.
          </p>
          <div className="hero-cta">
            <a href="/work" className="btn-primary">View Our Work</a>
            <a href="/contact" className="btn-secondary">Start a Project</a>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="client-logos">
        <div className="container">
          <p className="section-label">Trusted by industry leaders</p>
          <div className="logo-grid">
            <div className="client-logo">Microsoft</div>
            <div className="client-logo">Adobe</div>
            <div className="client-logo">Amazon</div>
            <div className="client-logo">Netflix</div>
            <div className="client-logo">Salesforce</div>
            <div className="client-logo">Dropbox</div>
            <div className="client-logo">J.P. Morgan</div>
            <div className="client-logo">Intuit</div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-preview section-padding">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Brand Strategy & Identity</h3>
              <p>Visual identity, brand messaging, and positioning that resonates.</p>
            </div>
            <div className="service-item">
              <h3>Content Production</h3>
              <p>High-velocity content that maintains brand integrity and scales.</p>
            </div>
            <div className="service-item">
              <h3>Campaign Planning</h3>
              <p>Integrated campaigns from concept to execution.</p>
            </div>
            <div className="service-item">
              <h3>SEO & AEO Consulting</h3>
              <p>Optimization for AI search and conversational engines.</p>
            </div>
          </div>
          <a href="/services" className="btn-text">View All Services →</a>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="featured-work section-padding bg-white">
        <div className="container">
          <h2>Featured Work</h2>
          <div className="work-showcase">
            <div className="case-study-card">
              <div className="case-study-image" style={{backgroundColor: '#e8f5e9'}}></div>
              <h3>HubSpot Ventures</h3>
              <p>Establishing credibility through a sophisticated brand</p>
              <a href="/work" className="case-link">View Case Study →</a>
            </div>
            <div className="case-study-card">
              <div className="case-study-image" style={{backgroundColor: '#fff3e0'}}></div>
              <h3>Instacart Ads</h3>
              <p>From concept to market in two weeks with 115+ campaign assets</p>
              <a href="/work" className="case-link">View Case Study →</a>
            </div>
            <div className="case-study-card">
              <div className="case-study-image" style={{backgroundColor: '#e3f2fd'}}></div>
              <h3>Fieldguide</h3>
              <p>An in-your-face awareness campaign for an agentic AI solution</p>
              <a href="/work" className="case-link">View Case Study →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to tell your story?</h2>
            <p>Let's create content that wins in the algorithmic age.</p>
            <a href="/contact" className="btn-primary-large">Start a Conversation</a>
          </div>
        </div>
      </section>
    </div>
  );
}
