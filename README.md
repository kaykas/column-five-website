# Column Five Media - Modern Dark Design with Real Content

Modern website combining the sleek dark design aesthetic you provided with Column Five Media's authentic content. Features glass morphism effects, floating gradients, and professional B2B case studies.

## Live Deployment

- **Production**: https://column-five-website-kydd6t3xn-jascha-kaykas-wolffs-projects.vercel.app
- **GitHub Repository**: https://github.com/kaykas/column-five-website
- **Local Dev**: http://localhost:5173/

## Design Features

### Visual Aesthetic
- ✨ **Glass morphism orb** with animated shimmer effect
- 🌊 **Floating gradient** background effects (purple and blue)
- 🎨 **Dark theme** (#030303 background, #ffffff text)
- 🔲 **Corner brackets** on service cards with numbering
- 🎭 **Mix-blend-mode** header for modern effect
- 💫 **Smooth animations** and hover transitions

### Authentic Column Five Content

**Tagline**: "Tell a brand story that wins in AI search"

**Real Clients**:
Microsoft, Adobe, Amazon, Netflix, Salesforce, Dropbox, J.P. Morgan, Charles Schwab, Intuit, Deloitte, Forrester, UCLA, Instacart, Zendesk, VideoAmp, Teach For America, Vercel, Narrative 4

**Real Case Studies**:
- **HubSpot Ventures**: Establishing Credibility Through a Sophisticated Brand
- **Instacart Ads**: From Concept to Market in Two Weeks with 115+ Campaign Assets
- **Fieldguide**: An In-Your-Face Awareness Campaign for an Agentic AI Solution
- **J.P. Morgan Payments**: ABM Campaign Drives Growth With Key Accounts
- **Dropbox**: Go-to-Market Recruiting Strategy Increases Brand Perception 19%
- **Zendesk**: Content Hub Drives 40% Increase in Qualified Leads
- **VideoAmp**: Thought Leadership Content Positions CEO as Industry Voice
- **Vercel**: Developer-First Content Strategy for Next-Gen Platform

**Real Services**:
- Brand Strategy & Identity
- Content Production at Scale
- Campaign Planning
- SEO & AEO Optimization
- Video & Motion Graphics
- Conversational AI Experiences
- Interactive Web Design
- Executive Thought Leadership
- Sales Enablement Content
- Annual Reports & White Papers

## Site Structure

### Pages
1. **Home** (`/`) - Glass orb hero, client logos, capabilities grid, featured work
2. **Services** (`/services`) - Service catalog organized by category with corner brackets
3. **Work** (`/work`) - 8 case studies with custom background effects
4. **About** (`/about`) - Company story, values, full client roster, founding info
5. **Contact** (`/contact`) - Professional contact form with budget selection

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
│   └── Header.jsx          # Fixed navigation with mix-blend-mode
├── pages/
│   ├── Home.jsx           # Glass orb hero, capabilities, featured work
│   ├── Services.jsx       # Service cards with brackets
│   ├── Work.jsx           # Portfolio with custom backgrounds
│   ├── About.jsx          # Company info, values, clients
│   └── Contact.jsx        # Contact form with budget selector
├── App.jsx                # Router configuration
├── index.css              # Global styles + dark theme
└── main.jsx               # Entry point
```

## Design System

### Color Palette
- Background: `#030303` (Near black)
- Card Background: `#0a0a0a` (Slightly lighter black)
- Text Primary: `#ffffff` (White)
- Text Secondary: `#888888` (Gray)
- Borders: `rgba(255, 255, 255, 0.1)` (Subtle white)

### Visual Effects
- Glass orb with conic gradient and shimmer animation
- Floating gradient orbs (purple #4e54c8, blue #302b63)
- Corner brackets on service cards
- Custom work image backgrounds (gradients, geometric shapes)
- Mix-blend-mode exclusion on header

### Typography
- Font Family: Helvetica Neue, Helvetica, Arial
- Responsive clamp() sizing
- Uppercase nav with letter spacing
- Italic serif for hero accent text

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site automatically deploys to Vercel on every push to main.

Manual deployment:
```bash
vercel --prod
```

## About Column Five

**Founded**: 2009
**Founders**: Jason Lankow, Ross Crooks, Josh Ritchie
**Location**: Newport Beach, California
**Team**: ~50 employees
**Focus**: B2B SaaS content marketing

### Company Values
- Be Curious
- Do Good Work
- Embrace Diversity
- Act Courageously
- Be Good to Each Other

## License

This is a demonstration combining modern design with Column Five Media's content. All content and branding belong to Column Five Media.

© 2024 Column Five Media. All Rights Reserved.
