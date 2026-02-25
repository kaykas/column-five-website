export default function Contact() {
  return (
    <div className="page">
      <section className="page-hero-dark">
        <div className="container">
          <h1>Let's Talk</h1>
          <p className="page-intro-dark">
            Tell us about your project and we'll show you what's possible.
          </p>
        </div>
      </section>

      <section className="contact-content section-padding">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p style={{ maxWidth: '100%', lineHeight: 1.7 }}>
                Whether you're looking to refresh your brand, scale content production,
                or launch a new campaign, we're here to help.
              </p>

              <div className="contact-details">
                <div className="detail-item-dark">
                  <h3>Email</h3>
                  <p><a href="mailto:hello@columnfivemedia.com">hello@columnfivemedia.com</a></p>
                </div>

                <div className="detail-item-dark">
                  <h3>Location</h3>
                  <p>Newport Beach, California</p>
                </div>

                <div className="detail-item-dark">
                  <h3>Follow Us</h3>
                  <div className="social-links">
                    <a href="https://linkedin.com/company/column-five" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/columnfive" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com/columnfive" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-dark">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Work Email *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company *</label>
                  <input type="text" id="company" name="company" required />
                </div>

                <div className="form-group">
                  <label htmlFor="website">Company Website</label>
                  <input type="url" id="website" name="website" />
                </div>

                <div className="form-group">
                  <label htmlFor="project">Tell us about your project *</label>
                  <textarea id="project" name="project" rows="5" required></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" name="budget">
                    <option value="">Select a range</option>
                    <option value="under-25k">Under $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-plus">$100k+</option>
                  </select>
                </div>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
