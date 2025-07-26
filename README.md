# Omji Shukla - Portfolio Website

<div align="center">
  <img src="public/profile.jpg" alt="Omji Shukla" width="150" height="150" style="border-radius: 50%;">
  <br/>
  <h3>Full-Stack Developer & Quantitative Trading Engineer</h3>
  <p>Building high-performance systems at the intersection of finance and technology</p>
  
  [![Website](https://img.shields.io/badge/Website-omjishukla.com-blue?style=for-the-badge&logo=vercel)](https://omjishukla.com)
  [![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/new/upstash/clone?demo-title=Next.js%20Portfolio%20with%20Pageview%20Counter&demo-description=Portfolio%20site%20with%20pageview%20counter%2C%20built%20with%20Next.js%2013%20App%20Router%2C%20Contentlayer%2C%20and%20Upstash%20Redis.&demo-url=https%3A%2F%2Fomjishukla.com%2F&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F1DA8n5a6WaP9p1FXf9LmUY%2Fc6264fa2732355787bf657df92dda8a1%2FCleanShot_2023-04-17_at_14.17.37.png&project-name=Next.js%20Portfolio%20with%20Pageview%20Counter&repository-name=nextjs-portfolio-pageview-counter&repository-url=https%3A%2F%2Fgithub.com%2Fomjishukla%2Fportfolio&from=templates&integration-ids=oac_V3R1GIpkoJorr6fqyiwdhl17)
</div>

## 🚀 Overview

A modern, responsive portfolio website showcasing my expertise in full-stack development, quantitative trading systems, and high-frequency trading infrastructure. Built with cutting-edge technologies and designed for optimal performance and user experience.

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Dark Theme**: Elegant dark mode with gradient accents
- **Smooth Animations**: Framer Motion powered transitions and scroll-based animations
- **Interactive Elements**: Hover effects, scale animations, and dynamic navigation

### 📊 **Analytics & Performance**
- **Real-time Page Views**: Upstash Redis-powered analytics
- **Performance Optimized**: Next.js 13 App Router with server-side rendering
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Fast Loading**: Optimized images, fonts, and bundle splitting

### 📝 **Content Management**
- **MDX Support**: Rich content with React components
- **Contentlayer Integration**: Type-safe content management
- **Dynamic Project Pages**: Auto-generated from markdown files
- **Code Highlighting**: Syntax highlighting for code blocks

### 🎯 **Portfolio Sections**
- **About Me**: Personal introduction and background
- **Work Experience**: Professional journey and achievements
- **Projects**: Showcase of technical projects with detailed descriptions
- **Education**: Academic background and certifications
- **Poetry**: Creative writing collection (हुजरे की शाम)
- **Contact**: Professional social links and connections

## 🛠️ Technology Stack

### **Frontend**
- [Next.js 13](https://nextjs.org/) - React framework with App Router
- [React 18](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library

### **Content & Styling**
- [Contentlayer](https://www.contentlayer.dev/) - Content management
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [Lucide React](https://lucide.dev/) - Icon library
- [React Wrap Balancer](https://github.com/shuding/react-wrap-balancer) - Text wrapping

### **Backend & Analytics**
- [Upstash Redis](https://upstash.com/) - Analytics and caching
- [Vercel](https://vercel.com/) - Deployment and hosting
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction) - Serverless functions

### **Development Tools**
- [Rome](https://rome.tools/) - Code formatting and linting
- [PostCSS](https://postcss.org/) - CSS processing
- [pnpm](https://pnpm.io/) - Package manager

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omjishukla/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local` file:
   ```env
   UPSTASH_REDIS_REST_URL=your_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_redis_token
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm fmt          # Format code with Rome
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── components/         # Reusable React components
│   ├── contact/           # Contact page
│   ├── education/         # Education page
│   ├── introductions/     # About Me page
│   ├── projects/          # Projects listing and detail pages
│   ├── work-experience/   # Work experience page
│   └── writing/           # Poetry page
├── content/               # MDX content files
│   └── projects/          # Project markdown files
├── public/                # Static assets
├── types/                 # TypeScript type definitions
└── util/                  # Utility functions
```

## 🎨 Customization

### Adding New Projects
1. Create a new `.mdx` file in `content/projects/`
2. Use the following frontmatter structure:
   ```mdx
   ---
   title: Project Title
   description: Brief project description
   date: "YYYY-MM-DD"
   published: true
   ---
   ```

### Styling
- **Colors**: Modify `tailwind.config.js` for theme customization
- **Fonts**: Update font imports in `app/layout.tsx`
- **Animations**: Adjust Framer Motion configurations in components

### Content Updates
- **Profile**: Update `public/profile.jpg` and personal information
- **Projects**: Add/remove MDX files in `content/projects/`
- **Navigation**: Modify `app/components/nav.tsx`

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 📊 Analytics

The portfolio includes real-time page view tracking using Upstash Redis:
- **API Route**: `pages/api/incr.ts`
- **Component**: `app/components/analytics.tsx`
- **Data**: Stored in Redis with automatic expiration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [omjishukla.com](https://omjishukla.com)
- **GitHub**: [@omjishukla](https://github.com/omjishukla)
- **LinkedIn**: [Omji Shukla](https://linkedin.com/in/omjishukla)

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio design patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: [Upstash](https://upstash.com/)

---

<div align="center">
  <p>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
