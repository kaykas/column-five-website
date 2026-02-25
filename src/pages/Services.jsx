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
    <div className="page services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Services</h1>
          <p className="page-intro">
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
              <div className="services-list">
                {category.items.map((service, sidx) => (
                  <div key={sidx} className="service-detail-card">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-cta section-padding bg-white">
        <div className="container">
          <div className="cta-content">
            <h2>Let's build something together</h2>
            <p>Tell us about your project and we'll show you what's possible.</p>
            <a href="/contact" className="btn-primary-large">Start a Project</a>
          </div>
        </div>
      </section>
    </div>
  );
}
