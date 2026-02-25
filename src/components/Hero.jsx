export default function Hero() {
  return (
    <section className="hero">
      <div className="glass-orb"></div>

      <div className="hero-meta">
        <span>[ Articulating Value ]</span>
        <span>[ Human &amp; LLM ]</span>
      </div>

      <div className="hero-content">
        <h1 className="split-chars">
          Content for the<br />
          <span style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontFamily: 'serif' }}>
            Algorithmic
          </span> Age
        </h1>
        <div className="hero-sub">
          We help ambitious SaaS and AI brands build content engines that scale authority,
          capture search, and resonate with human decision-makers.
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
  );
}
