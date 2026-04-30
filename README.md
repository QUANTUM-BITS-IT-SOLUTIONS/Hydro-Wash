# HydroWash Car Wash Studio

A premium car wash and detailing studio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

## 🚀 Features

- **Modern React Frontend** with TypeScript and Vite
- **Responsive Design** optimized for mobile devices
- **Service Pages** with detailed information
- **Booking System** UI ready for integration
- **Contact Form** ready for integration
- **Gallery & Testimonials** sections
- **Smooth Animations** with premium transitions

## 📁 Project Structure

```
Carwash-Studio-main/
├── src/                    # React Frontend
│   ├── components/         # React components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Process.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── pages/              # Page components
│   │   ├── ServicesList.tsx
│   │   └── ServiceDetail.tsx
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utilities
│   └── ...
├── public/                 # Static assets
├── package.json            # Frontend dependencies
└── README.md
```

## 🛠️ Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

## 📦 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd Carwash-Studio-main
```

### 2. Install Dependencies

```bash
npm install
```

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

The app will be available at http://localhost:8080

### Production Mode

**Build:**
```bash
npm run build
```

**Preview:**
```bash
npm run preview
```

## 📡 Key Components

### Services
- Service listing page at `/services`
- Individual service detail pages
- Package pricing display
- Before/after image comparisons

### Booking
- Booking form with service selection
- Date and time preferences
- Vehicle information collection

### Contact
- Contact form with validation
- Location map integration
- Multiple contact methods

### Gallery
- Filterable image gallery
- Before/after comparisons
- Lightbox view

### Testimonials
- Customer review carousel
- Star ratings
- Verified customer badges

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Services

Edit the service data in `src/pages/ServicesList.tsx` or add a new service page in `src/pages/ServiceDetail.tsx`.

### Styling

The project uses **Tailwind CSS** with custom:
- Gold accent color (#C9A227)
- Dark theme background (#0A0A0B)
- Custom animations and utilities in `src/index.css`

### Styling

The project uses **Tailwind CSS** with custom:
- Gold accent color (#C9A227)
- Dark theme background (#0A0A0B)
- Custom animations in `src/index.css`
- Responsive breakpoints for all devices

## 🚀 Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project: `npm run build`
2. Deploy the `dist/` folder

### Configuration

No special configuration needed for static hosting.

## 📝 License

This project is private and proprietary.

## 🤝 Support

For support, email info@hydrowash.com or call +91 98765 43210.
