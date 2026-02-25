# Column Five Media - AI-Forward Content Agency

Modern, responsive website for Column Five agency featuring a minimalist dark theme with glass morphism effects and premium typography.

## Live Deployment

- **Production**: https://column-five-website-ex2cn2ikx-jascha-kaykas-wolffs-projects.vercel.app
- **GitHub Repository**: https://github.com/kaykas/column-five-website

## Features

- ✨ Glass morphism orb hero effect with animated shimmer
- 🎨 Modern dark theme with strategic accent colors
- 📱 Fully responsive grid layouts
- 🚀 Built with React + Vite for optimal performance
- 💫 Smooth animations and transitions
- 🎯 Component-based architecture

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables
- **Deployment**: Vercel
- **Version Control**: GitHub

## Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Fixed navigation header
│   ├── Hero.jsx         # Hero section with glass orb
│   ├── Logos.jsx        # Client logos showcase
│   ├── Services.jsx     # Capabilities/services grid
│   ├── Work.jsx         # Featured work portfolio
│   ├── Footer.jsx       # Contact form and footer
│   └── Floaters.jsx     # Background gradient effects
├── App.jsx              # Main app component
├── index.css            # Global styles
└── main.jsx             # Entry point
```

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

## Design Features

### Glass Morphism Orb
- Animated shimmer effect
- Layered gradients and shadows
- Conic gradient backgrounds

### Color System
- Background: `#030303`
- Cards: `#0a0a0a`
- Text Primary: `#ffffff`
- Text Secondary: `#888888`
- Borders: `rgba(255, 255, 255, 0.1)`

### Typography
- Font Family: Helvetica Neue, Helvetica, Arial
- Responsive clamp() sizing
- Negative letter spacing for premium feel

## Deployment

The site is automatically deployed to Vercel on every push to the main branch.

To manually deploy:
```bash
vercel --prod
```

## License

© 2024 COLUMN FIVE. ALL RIGHTS RESERVED.
