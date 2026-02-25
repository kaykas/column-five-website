export default function About() {
  return (
    <div className="page about-page">
      <section className="page-hero">
        <div className="container">
          <h1>About Column Five</h1>
          <p className="page-intro">
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
              <div className="stat-item">
                <h3>Founded</h3>
                <p>2009</p>
              </div>
              <div className="stat-item">
                <h3>Location</h3>
                <p>Newport Beach, CA</p>
              </div>
              <div className="stat-item">
                <h3>Team Size</h3>
                <p>~50 Employees</p>
              </div>
              <div className="stat-item">
                <h3>Focus</h3>
                <p>B2B SaaS Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section-padding bg-white">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Be Curious</h3>
              <p>We ask questions, seek understanding, and never stop learning.</p>
            </div>
            <div className="value-card">
              <h3>Do Good Work</h3>
              <p>Excellence isn't negotiable. Every project deserves our best.</p>
            </div>
            <div className="value-card">
              <h3>Embrace Diversity</h3>
              <p>Different perspectives make us stronger and our work better.</p>
            </div>
            <div className="value-card">
              <h3>Act Courageously</h3>
              <p>The best work requires taking risks and challenging conventions.</p>
            </div>
            <div className="value-card">
              <h3>Be Good to Each Other</h3>
              <p>Partnership over vendor relationships. Transparency over politics.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="clients-section section-padding">
        <div className="container">
          <h2>Clients We've Worked With</h2>
          <div className="client-list">
            <div className="client-name">Microsoft</div>
            <div className="client-name">Adobe</div>
            <div className="client-name">Amazon</div>
            <div className="client-name">Netflix</div>
            <div className="client-name">Salesforce</div>
            <div className="client-name">Dropbox</div>
            <div className="client-name">J.P. Morgan</div>
            <div className="client-name">Charles Schwab</div>
            <div className="client-name">Intuit</div>
            <div className="client-name">Deloitte</div>
            <div className="client-name">Forrester</div>
            <div className="client-name">UCLA</div>
            <div className="client-name">Instacart</div>
            <div className="client-name">Zendesk</div>
            <div className="client-name">VideoAmp</div>
            <div className="client-name">Vercel</div>
            <div className="client-name">Narrative 4</div>
            <div className="client-name">Teach For America</div>
          </div>
        </div>
      </section>

      <section className="about-cta section-padding bg-white">
        <div className="container">
          <div className="cta-content">
            <h2>Work with us</h2>
            <p>Let's create content that drives results for your brand.</p>
            <a href="/contact" className="btn-primary-large">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
