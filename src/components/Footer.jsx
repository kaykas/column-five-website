export default function Footer() {
  return (
    <div className="footer-cta" id="contact">
      <div>
        <h2>Ready to define the future?</h2>
        <p style={{ marginTop: '20px' }}>
          Let's discuss how your brand can command authority in the era of artificial intelligence.
        </p>

        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter/X</a>
          <a href="#">Bento</a>
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
  );
}
