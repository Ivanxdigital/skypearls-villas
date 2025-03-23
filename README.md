# Skypearls Villas - Luxury Smart Home Project

A sophisticated landing page for Skypearls Villas, showcasing luxury smart homes in Siargao, Philippines. Built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is a modern, responsive landing page designed to showcase luxury smart villas and generate leads. The project emphasizes performance, SEO, and conversion optimization.

## Tech Stack

- **Frontend Framework:** React 18.3.1 with TypeScript
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** Lucide React 0.344.0
- **Build Tool:** Vite 5.4.2
- **Development Tools:**
  - ESLint 9.9.1
  - TypeScript 5.5.3
  - PostCSS 8.4.35
  - Autoprefixer 10.4.18

## Project Structure

```
src/
├── components/           # React components
│   ├── Hero.tsx         # Full-screen video hero section
│   ├── PropertyShowcase.tsx  # Property features and gallery
│   ├── Investment.tsx   # Investment statistics and analysis
│   ├── Location.tsx     # Location benefits and map
│   └── Contact.tsx      # Contact forms and information
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles and Tailwind imports
└── vite-env.d.ts      # TypeScript environment declarations
```

## Key Features

### 1. Hero Section (`Hero.tsx`)
- Full-screen video background
- Optimized video playback (0.8x speed)
- Smooth scroll functionality
- Gradient overlay for text readability

### 2. Property Showcase (`PropertyShowcase.tsx`)
- Smart home feature cards with hover effects
- Image gallery with responsive grid
- Construction progress indicator
- Feature icons from Lucide React

### 3. Investment Section (`Investment.tsx`)
- Investment statistics cards
- Animated progress bars
- Market analysis visualization
- ROI and growth metrics

### 4. Location Benefits (`Location.tsx`)
- Interactive Google Maps integration
- Nearby attractions with distance indicators
- Infrastructure development highlights
- Location-based amenities

### 5. Contact Section (`Contact.tsx`)
- Multi-purpose contact form
- Newsletter subscription
- Social media integration
- WhatsApp/Telegram direct connect

## Design System

### Colors
- Primary Background: Charcoal (`#1A1A1A`)
- Accent Colors:
  - Teal: `#00838F`
  - Sand: `#D4C19C`

### Typography
- Headings: Poppins (300-700 weights)
- Body: Inter (300-500 weights)

### Components
- `.btn-primary`: Primary action buttons
- `.section-padding`: Consistent section spacing
- `.fade-in`: Intersection Observer animations

## SEO Implementation

- Structured data for real estate listings
- Meta tags targeting property investment
- Open Graph tags for social sharing
- Semantic HTML structure

## Animation System

- Intersection Observer for scroll animations
- Smooth scroll behavior
- Hover state transitions
- Loading state animations

## Performance Optimizations

- Lazy loaded images
- Video playback optimization
- Tailwind CSS purge optimization
- Component-level code splitting

## Development Guidelines

### Adding New Features

1. **Component Creation:**
   - Place new components in `src/components/`
   - Follow existing naming conventions
   - Implement TypeScript interfaces

2. **Styling:**
   - Use Tailwind CSS classes
   - Follow existing color scheme
   - Maintain responsive design patterns

3. **Images:**
   - Use Unsplash URLs for stock photos
   - Implement lazy loading
   - Maintain aspect ratios

4. **Icons:**
   - Use Lucide React icons
   - Maintain consistent sizing
   - Follow existing color scheme

### Code Style

- Use TypeScript for type safety
- Implement React hooks consistently
- Follow existing component structure
- Maintain SEO best practices

## Conversion Optimization

- Strategic CTA placement
- Form optimization
- Social proof elements
- Trust indicators
- Multiple contact points

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Progressive enhancement

## Future Considerations

- Dynamic content management
- Multi-language support
- Virtual tour integration
- Booking system integration
- Analytics implementation

## Performance Metrics

- Core Web Vitals optimization
- Mobile responsiveness
- Load time optimization
- SEO score maintenance

This documentation provides a comprehensive overview of the project structure and implementation details. Use this as a reference when adding new features or making modifications to maintain consistency and quality.