# ABF Funeral Services Website

A modern, responsive funeral services website built with Next.js 14, featuring a hybrid architecture with both Next.js App Router components and static HTML pages.

## 🌟 Overview

ABF Funeral Services provides compassionate and dignified funeral arrangements with a focus on personalized care and respect for families during their time of need. This website showcases our comprehensive services, from traditional burials to modern memorial services.

## 🏗️ Project Architecture

```
/
├── app/                          # Next.js App Router (Primary)
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page component
│   ├── globals.css              # Global styles and Tailwind imports
│   ├── about/                   # About page
│   ├── services/                # Services page
│   ├── pricing/                 # Pricing packages
│   ├── contact/                 # Contact information
│   ├── ekijja-omanyi/           # Savings scheme
│   ├── obituaries/              # Recent obituaries
│   └── gallery/                 # Photo gallery
├── components/                  # Reusable React components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Site footer
│   ├── Hero.tsx                # Hero section
│   ├── Services.tsx            # Services grid
│   ├── Testimonials.tsx        # Client testimonials
│   └── RecentObituaries.tsx    # Recent obituaries
├── public/                     # Static assets
│   └── pictures/               # High-quality service images
├── [static-html]/             # Static HTML pages
│   ├── index.html             # Home page (HTML)
│   ├── about.html             # About page (HTML)
│   ├── services.html          # Services page (HTML)
│   ├── contact.html           # Contact page (HTML)
│   ├── pricing.html           # Pricing page (HTML)
│   ├── obituaries.html        # Obituaries page (HTML)
│   └── ekijja-omanyi.html     # Savings page (HTML)
├── styles.css                 # Additional custom styles
├── tailwind.config.js         # Tailwind CSS configuration
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
└── tsconfig.json              # TypeScript configuration
```

## ✨ Features

### 🎨 Design & User Experience
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Mobile-First Design**: Progressive enhancement approach
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Fast Loading**: Optimized images and efficient code

### 🚀 Performance
- **Next.js 14**: Latest framework with App Router
- **Static Generation**: Fast loading with pre-built pages
- **Image Optimization**: Automatic image optimization
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### 📱 Responsive Features
- **Adaptive Navigation**: Mobile hamburger menu
- **Flexible Layouts**: Grid systems that adapt to screen size
- **Touch-Friendly**: Optimized for mobile interactions
- **Cross-Device**: Consistent experience across all devices

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom components
- **Language**: TypeScript for type safety
- **Deployment**: Compatible with Vercel, Netlify, and static hosting
- **Images**: Local assets with Next.js Image optimization

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm
- Git for version control

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd abf-funeral-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:3000
   ```

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🎯 Key Components

### Navigation & Layout
- **Header**: Responsive navigation with mobile menu
- **Footer**: Comprehensive contact information and links
- **Layout**: Consistent page structure across all routes

### Content Sections
- **Hero**: Compelling introduction with background images
- **Services**: Grid layout showcasing service offerings
- **Testimonials**: Client feedback and reviews
- **Contact**: Multiple contact methods and location info

### Static Pages
- **About**: Company history and values
- **Services**: Detailed service descriptions
- **Pricing**: Transparent pricing packages
- **Obituaries**: Recent memorials and tributes
- **Gallery**: Professional service photography

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Hamburger navigation menu
- Touch-friendly button sizes
- Optimized typography scaling
- Efficient use of screen space

## 🚀 Deployment

### Supported Platforms
- **Vercel**: Recommended for Next.js projects
- **Netlify**: Great static site hosting
- **AWS Amplify**: Scalable cloud deployment
- **Static Hosting**: Any service supporting static files

### Deployment Steps

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your platform**
   - Connect repository to hosting service
   - Configure build settings
   - Deploy automatically

## 📊 Project Structure Benefits

### Hybrid Architecture
- **Next.js App Router**: Modern, dynamic pages
- **Static HTML**: Fast-loading alternative pages
- **Maximum Compatibility**: Works across different hosting environments

### Maintainability
- **Component-Based**: Reusable React components
- **TypeScript**: Type safety and better development experience
- **Modular CSS**: Organized styling with Tailwind

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to ABF Funeral Services.

## 📞 Support

For technical support or questions about the website:
- Contact: ABF Funeral Services
- Email: info@abffuneralservices.com
- Phone: +256 776 514 531

---

**ABF Funeral Services** - *Reflecting God in Service*