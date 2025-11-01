# AgenceK72 - Creative Agency Website

A modern, high-performance creative agency website built with React and GSAP animations. Featuring stunning visuals, smooth scroll-triggered animations, and an immersive user experience.

## 🚀 Features

- **Smooth Animations**: GSAP-powered scroll-triggered animations with 3D transforms
- **Custom Cursor**: Interactive custom cursor with hover effects
- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Clean, minimal design with bold typography
- **Multiple Pages**: Home, Agence (About), Projects, and Contact pages
- **Full-Screen Navigation**: Immersive navigation menu with animations
- **Scroll Animations**: Parallax effects and scroll-triggered reveals

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **GSAP 3** - Professional animation library
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom Fonts** - Lausanne font family (300 & 500 weights)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
AgenceK72/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── CustomCursor.jsx    # Custom cursor component
│   │   │   └── Stairs.jsx          # Stairs animation component
│   │   ├── home/
│   │   │   ├── HomeHeroText.jsx     # Hero text component
│   │   │   ├── HomeBottomText.jsx   # Bottom text component
│   │   │   └── Video.jsx            # Video component
│   │   ├── Navigation/
│   │   │   ├── Navbar.jsx           # Top navigation bar
│   │   │   └── FullScreenNav.jsx    # Full-screen navigation menu
│   │   └── projects/
│   │       └── ProjectCard.jsx      # Project card component
│   ├── pages/
│   │   ├── Home.jsx                 # Home page
│   │   ├── Agence.jsx               # About/Team page
│   │   ├── Projects.jsx             # Projects showcase
│   │   └── Contact.jsx              # Contact page with form
│   ├── context/
│   │   └── NavContext.jsx           # Navigation context
│   ├── assets/                      # Static assets
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── public/
│   ├── fonts/                       # Custom font files
│   └── video.mp4                    # Background video
└── package.json
```

## 🎯 Pages & Routes

### Home (`/`)

- Hero section with animated text
- Background video integration
- Smooth scroll animations

### Agence (`/agence`)

- Team member showcase
- Pinned scrolling images
- Large typography with 3D effects
- Team philosophy section

### Projects (`/projects`)

- Project gallery with cards
- Scroll-triggered animations
- Image hover effects
- Multiple project showcases

### Contact (`/contact`)

- Contact form with validation
- Contact information cards
- Smooth scroll animations
- Form field focus effects

## 🎨 Key Components

### CustomCursor

- Custom cursor that follows mouse movement
- Expands on interactive elements
- Mix-blend-difference effect

### FullScreenNav

- Full-screen navigation overlay
- Animated menu items
- Smooth transitions

### Animation System

- ScrollTrigger animations via GSAP
- 3D transforms and rotations
- Parallax scrolling effects
- Staggered animations

## 🎬 Animations

- **Scroll-Triggered**: Elements animate as they enter viewport
- **3D Transforms**: Rotation and perspective effects
- **Parallax**: Multi-layer scrolling effects
- **Stagger**: Sequential element animations
- **Pin**: Elements pinned during scroll

## 🎨 Design Features

- **Custom Typography**: Lausanne font family
- **Color Palette**: Black background with #D3FD50 accent
- **Smooth Scrolling**: Enhanced scroll behavior
- **Custom Scrollbar**: Styled scrollbar

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development

Built with modern React practices:

- Functional components with hooks
- Context API for state management
- GSAP for performance-optimized animations
- React Router for navigation

## 🚀 Performance

- Optimized animations with GSAP
- Lazy loading for images
- Efficient scroll triggers
- Minimal re-renders

---

**Note**: This is a creative agency portfolio website showcasing modern web development techniques and smooth animations.
