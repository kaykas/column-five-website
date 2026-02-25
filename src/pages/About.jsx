export default function About() {
  const clients = [
    "Microsoft", "Adobe", "Amazon", "Netflix", "Salesforce", "Dropbox",
    "J.P. Morgan", "Charles Schwab", "Intuit", "Deloitte", "Forrester", "UCLA",
    "Instacart", "Zendesk", "VideoAmp", "Vercel", "Narrative 4", "Teach For America"
  ];

  return (
    <div className="page">
      <section className="page-hero-dark">
        <div className="container">
          <h1>About Column Five</h1>
          <p className="page-intro-dark">
            Since 2009, we've helped B2B brands tell stories that drive business results.
          </p>
        </div>
      </section>

      <section className="about-story section-padding">
        <div className="container">
          <div className="two-column-layout">
            <div className="content-column">
              <h2>Our Story</h2>
              <p>
                Founded in Newport Beach, California by Jason Lankow, Ross Crooks, and Josh Ritchie,
                Column Five has grown from a scrappy startup to a 50-person agency specializing in
                B2B content for SaaS companies.
              </p>
              <p>
                We believe storytelling is the last remaining competitive advantage. In a world where
                AI can generate content at scale, the brands that win are those with unique perspectives
                and authentic voices.
              </p>
            </div>
            <div className="stats-column">
              <div className="stat-item-dark">
                <h3>Founded</h3>
                <p>2009</p>
              </div>
              <div className="stat-item-dark">
                <h3>Location</h3>
                <p>Newport Beach, CA</p>
              </div>
              <div className="stat-item-dark">
                <h3>Team Size</h3>
                <p>~50 Employees</p>
              </div>
              <div className="stat-item-dark">
                <h3>Focus</h3>
                <p>B2B SaaS Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <h2>Our Values</h2>
          <div className="grid-2">
            <div className="service-card">
              <h3>Be Curious</h3>
              <p>We ask questions, seek understanding, and never stop learning.</p>
            </div>
            <div className="service-card">
              <h3>Do Good Work</h3>
              <p>Excellence isn't negotiable. Every project deserves our best.</p>
            </div>
            <div className="service-card">
              <h3>Embrace Diversity</h3>
              <p>Different perspectives make us stronger and our work better.</p>
            </div>
            <div className="service-card">
              <h3>Act Courageously</h3>
              <p>The best work requires taking risks and challenging conventions.</p>
            </div>
            <div className="service-card">
              <h3>Be Good to Each Other</h3>
              <p>Partnership over vendor relationships. Transparency over politics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section section-padding">
        <div className="container">
          <h2>Clients We've Worked With</h2>
          <div className="logos" style={{ borderTop: 'none', borderBottom: 'none', padding: '40px 0', margin: 0, flexWrap: 'wrap', justifyContent: 'flex-start', gap: '30px' }}>
            {clients.map((client, idx) => (
              <div key={idx} className="logo-item" style={{ flex: '0 0 auto' }}>
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="footer-cta">
        <div>
          <h2>Work with us</h2>
          <p style={{ marginTop: '20px' }}>Let's create content that drives results for your brand.</p>
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
          <button>Get in Touch</button>
        </div>
      </div>
    </div>
  );
}
