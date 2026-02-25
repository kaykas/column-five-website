export default function Home() {
  return (
    <div className="page">
      {/* Floating gradient effects */}
      <div className="floater floater-1"></div>
      <div className="floater floater-2"></div>

      {/* Hero Section with Glass Orb */}
      <section className="hero">
        <div className="glass-orb"></div>

        <div className="hero-meta">
          <span>[ Storytelling as Competitive Advantage ]</span>
          <span>[ Human &amp; AI Audiences ]</span>
        </div>

        <div className="hero-content">
          <h1 className="split-chars">
            Tell a brand story that<br />
            <span style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontFamily: 'serif' }}>
              wins in AI search
            </span>
          </h1>
          <div className="hero-sub">
            We help SaaS and AI brands articulate unique perspectives and scale content
            to both human decision-makers and LLM algorithms.
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '40px',
          left: '40px',
          right: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          color: 'var(--text-secondary)',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}>
          <span>Scroll for Capability</span>
          <span>01 / 05</span>
        </div>
      </section>

      {/* Client Logos */}
      <div className="logos">
        <div className="logo-item">MICROSOFT</div>
        <div className="logo-item">ADOBE</div>
        <div className="logo-item">SALESFORCE</div>
        <div className="logo-item">NETFLIX</div>
        <div className="logo-item">DROPBOX</div>
      </div>

      {/* Services/Capabilities */}
      <div className="container section-padding">
        <div className="section-header">
          <h2>Capabilities</h2>
          <p style={{ textAlign: 'right' }}>
            Engineered for the dual audience:<br />
            Algorithms that rank you, Humans that buy from you.
          </p>
        </div>

        <div className="grid-2">
          <div className="service-card">
            <div className="bracket-tl"></div>
            <div className="bracket-br"></div>
            <div className="corner-tag tr">01</div>

            <div className="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5"></rect>
              </svg>
            </div>
            <div>
              <h3>Brand Strategy & Identity</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Visual identity, brand messaging, and positioning that cuts through AI-generated commodity content.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="bracket-tl"></div>
            <div className="bracket-br"></div>
            <div className="corner-tag tr">02</div>

            <div className="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div>
              <h3>Content Production at Scale</h3>
              <p style={{ fontSize: '0.95rem' }}>
                High-velocity content that maintains brand integrity and premium feel across all channels.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="bracket-tl"></div>
            <div className="bracket-br"></div>
            <div className="corner-tag tr">03</div>

            <div className="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div>
              <h3>Campaign Planning</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Integrated campaigns from concept to execution that drive measurable business results.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div className="bracket-tl"></div>
            <div className="bracket-br"></div>
            <div className="corner-tag tr">04</div>

            <div className="icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <div>
              <h3>SEO & AEO Optimization</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Optimizing for traditional search engines and AI-powered answer engines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Work */}
      <div className="container section-padding">
        <div className="section-header">
          <h2>Featured Work</h2>
          <a href="/work" style={{ borderBottom: '1px solid white', paddingBottom: '5px' }}>
            View Archive
          </a>
        </div>

        <div className="work-grid">
          <div className="work-item">
            <div className="work-image work-bg-1"></div>
            <div className="work-title">HubSpot Ventures</div>
            <div className="work-meta">
              <span>Brand Identity &amp; Strategy</span>
              <span>2024</span>
            </div>
          </div>

          <div className="work-item">
            <div className="work-image work-bg-2"></div>
            <div className="work-title">Instacart Ads</div>
            <div className="work-meta">
              <span>Campaign Production</span>
              <span>2024</span>
            </div>
          </div>

          <div className="work-item">
            <div className="work-image work-bg-3">
              <div style={{
                width: '100px',
                height: '100px',
                border: '1px solid rgba(255,255,255,0.2)',
                transform: 'rotate(45deg)'
              }}></div>
            </div>
            <div className="work-title">Fieldguide AI</div>
            <div className="work-meta">
              <span>Awareness Campaign</span>
              <span>2024</span>
            </div>
          </div>

          <div className="work-item">
            <div className="work-image work-bg-4">
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at top right, rgba(50,50,150,0.3), transparent)'
              }}></div>
            </div>
            <div className="work-title">J.P. Morgan Payments</div>
            <div className="work-meta">
              <span>ABM Campaign</span>
              <span>2023</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="footer-cta">
        <div>
          <h2>Ready to define the future?</h2>
          <p style={{ marginTop: '20px' }}>
            Let's discuss how your brand can command authority in the era of artificial intelligence.
          </p>

          <div className="footer-links">
            <a href="https://linkedin.com/company/column-five" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/columnfive" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com/columnfive" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

          <div style={{ marginTop: '60px', fontSize: '0.7rem', color: '#444' }}>
            © 2024 COLUMN FIVE. ALL RIGHTS RESERVED.
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
          <div className="input-group">
            <input type="text" placeholder="Project Details" />
          </div>
          <button>Initiate Contact</button>
        </div>
      </div>
    </div>
  );
}
