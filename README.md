# Column Five Media - Official Website Clone

Accurate recreation of Column Five Media's website featuring their real content, branding, and multi-page structure with authentic case studies and service offerings.

## Live Deployment

- **Production**: https://column-five-website-j1qdvx6t4-jascha-kaykas-wolffs-projects.vercel.app
- **GitHub Repository**: https://github.com/kaykas/column-five-website

## Authentic Content

This site features Column Five's actual content from their website:

### Real Client Roster
Microsoft, Adobe, Amazon, Netflix, Salesforce, Dropbox, J.P. Morgan, Charles Schwab, Intuit, Deloitte, Forrester, UCLA, Instacart, Zendesk, VideoAmp, Teach For America, Vercel, Narrative 4

### Actual Case Studies
- **HubSpot Ventures**: Establishing Credibility Through a Sophisticated Brand
- **Instacart Ads**: From Concept to Market in Two Weeks with 115+ Campaign Assets
- **Fieldguide**: An In-Your-Face Awareness Campaign for an Agentic AI Solution
- **J.P. Morgan Payments**: ABM Campaign Drives Growth With Key Accounts
- **Dropbox**: Go-to-Market Recruiting Strategy Increases Brand Perception 19%
- **Zendesk**: Content Hub Drives 40% Increase in Qualified Leads
- **VideoAmp**: Thought Leadership Content Positions CEO as Industry Voice
- **Vercel**: Developer-First Content Strategy for Next-Gen Platform

### Real Services
- Brand Strategy & Identity
- Content Strategy & Production
- Campaign Planning
- Media Planning & Performance
- SEO & AEO Consulting
- Video & Motion Graphics
- Conversational AI Experiences
- Interactive Web Design & Development
- Infographics & Data Visualization
- Sales Enablement Content
- Executive Thought Leadership
- Annual Reports & White Papers

## Site Structure

### Pages
1. **Home** (`/`) - Hero, client logos, services preview, featured work
2. **Services** (`/services`) - Complete service catalog organized by category
3. **Work** (`/work`) - Portfolio of case studies with real client work
4. **About** (`/about`) - Company story, values, team info, full client list
5. **Contact** (`/contact`) - Contact form with proper fields for project inquiries

## Features

- ✨ Authentic Column Five branding and color scheme
- 📱 Fully responsive multi-page site with React Router
- 🎨 Professional cream/beige theme (#f7f5e7)
- 🚀 Fast page transitions
- 📝 Complete contact form
- 🎯 Real case studies and client work
- 💼 B2B-focused professional design

## Tech Stack

- **Framework**: React 19
- **Routing**: React Router DOM 7
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables
- **Deployment**: Vercel
- **Version Control**: GitHub

## Project Structure

```
src/
├── components/
│   └── Header.jsx          # Navigation with React Router links
├── pages/
│   ├── Home.jsx           # Landing page with hero and featured content
│   ├── Services.jsx       # Complete service catalog
│   ├── Work.jsx           # Portfolio of case studies
│   ├── About.jsx          # Company info and values
│   └── Contact.jsx        # Contact form and details
├── App.jsx                # Router configuration
├── index.css              # Global styles and page-specific CSS
└── main.jsx               # Entry point
```

## Design System

### Color Palette (Authentic Column Five)
- Background: `#f7f5e7` (Cream/beige)
- Cards: `#ffffff` (White)
- Text Primary: `#1a1a1a` (Near black)
- Text Secondary: `#666666` (Gray)
- Accent: `#ff6b35` (Orange)
- Borders: `rgba(0, 0, 0, 0.1)` (Light gray)

### Typography
- Font Family: Helvetica Neue, Helvetica, Arial
- Responsive clamp() sizing
- Professional weight hierarchy
- Optimized line-height for readability

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is automatically deployed to Vercel on every push to the main branch.

To manually deploy:
```bash
vercel --prod
```

## About Column Five

**Founded**: 2009
**Founders**: Jason Lankow, Ross Crooks, Josh Ritchie
**Location**: Newport Beach, California
**Team**: ~50 employees
**Focus**: B2B SaaS marketing and content

### Company Values
- Be Curious
- Do Good Work
- Embrace Diversity
- Act Courageously
- Be Good to Each Other

## License

This is a demonstration clone of Column Five Media's website. All content and branding belong to Column Five Media.

© 2024 Column Five Media. All Rights Reserved.
