export default function Services() {
  const services = [
    {
      category: "Strategy",
      items: [
        {
          title: "Brand Strategy & Identity",
          description: "Visual identity, brand messaging, and positioning that cuts through the noise."
        },
        {
          title: "Content Strategy",
          description: "Strategic content planning that scales authority and captures search."
        },
        {
          title: "Campaign Planning",
          description: "Integrated campaigns from concept to execution across all channels."
        },
        {
          title: "SEO & AEO Consulting",
          description: "Optimization for traditional search and AI-powered answer engines."
        }
      ]
    },
    {
      category: "Production",
      items: [
        {
          title: "Content Creation",
          description: "Copywriting, design, and video production at scale."
        },
        {
          title: "Video & Motion Graphics",
          description: "Engaging video content that tells your brand story."
        },
        {
          title: "Infographics & Data Visualization",
          description: "Complex data transformed into compelling visual stories."
        },
        {
          title: "Interactive Web Design",
          description: "Web experiences that engage and convert."
        }
      ]
    },
    {
      category: "Specialized Services",
      items: [
        {
          title: "Conversational AI Experiences",
          description: "Content optimized for AI assistants and chatbots."
        },
        {
          title: "Executive Thought Leadership",
          description: "Positioning executives as industry voices."
        },
        {
          title: "Sales Enablement Content",
          description: "Content systems that accelerate the sales cycle."
        },
        {
          title: "Annual Reports & White Papers",
          description: "Long-form content that establishes authority."
        }
      ]
    }
  ];

  return (
    <div className="page">
      <section className="page-hero-dark">
        <div className="container">
          <h1>Services</h1>
          <p className="page-intro-dark">
            From strategy to execution, we help B2B brands tell stories that resonate
            with both human decision-makers and AI algorithms.
          </p>
        </div>
      </section>

      <section className="services-detail section-padding">
        <div className="container">
          {services.map((category, idx) => (
            <div key={idx} className="service-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="grid-2">
                {category.items.map((service, sidx) => (
                  <div key={sidx} className="service-card">
                    <div className="bracket-tl"></div>
                    <div className="bracket-br"></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="footer-cta">
        <div>
          <h2>Let's build something together</h2>
          <p style={{ marginTop: '20px' }}>Tell us about your project and we'll show you what's possible.</p>
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
          <button>Start a Project</button>
        </div>
      </div>
    </div>
  );
}
