# 🎨 Canva-Style Design Editor

A full-stack Canva-like design editor built with **React, Node.js, and MongoDB**.  
It supports drag-and-drop editing, templates, real-time collaboration, AI features, and production-grade performance, security, and accessibility.

---

## ✨ Features
- 🔐 **Authentication & Roles** (JWT/Clerk, role-based access)
- 🎨 **Canvas Editor** (drag, resize, rotate shapes/text/images)
- 📂 **File Uploads** (Cloudinary/AWS S3 integration)
- 📝 **Templates** (social media posts, banners, custom layouts)
- 💾 **Save/Load Designs** (DB persistence + auto-save)
- 📤 **Export Options** (PNG, JPEG, PDF, SVG)
- ⚡ **Performance Optimizations** (lazy loading, caching, web workers)
- 🔒 **Security Best Practices** (rate limiting, helmet, file validation)
- ♿ **Accessibility Support** (keyboard shortcuts, ARIA, screen reader support)
- 🤝 **Collaboration** (real-time multi-user editing with WebSockets/CRDT)
- 🤖 **AI Integrations** (text-to-image, color/font suggestions)
- 📊 **Analytics Dashboard** (track user activity, version history)

---

## 🛠 Tech Stack
**Frontend:** React (TypeScript), TailwindCSS, Vite, Zustand/Redux, Konva.js/Fabric.js  
**Backend:** Node.js (TypeScript), Express/NestJS, MongoDB/Postgres, Redis  
**Deployment:** Vercel/Netlify (frontend), Render/AWS/GCP (backend), MongoDB Atlas  
**Other:** Docker, GitHub Actions (CI/CD), Sentry, Prometheus, Cloudinary/S3  

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB (local or Atlas)
- Cloudinary/AWS S3 account (for image uploads)

### Setup
```bash
# Clone the repository
git clone https://github.com/zaheerali34/full-stack-project.git

# Install dependencies
cd your-repo
npm install

# Run frontend
cd client
npm run dev

# Run backend
cd server
npm run dev
