# Shia Community Hackathon 2026

![Hackathon Banner](public/favicon.ico) 

A high-performance, modern, and immersive landing page built for the **Shia Community Hackathon**. Designed with a premium tech aesthetic, featuring custom glassmorphism, dynamic animations, fluid typography, and absolute mobile responsiveness.

## 🚀 Tech Stack

- **Framework**: React 19 + Vite
- **Styling**: Pure Vanilla CSS (Custom tokens, variables, and fluid clamps)
- **Icons**: Lucide React
- **Animations**: TSParticles (Canvas hardware-accelerated backgrounds), custom CSS keyframes, and Intersection Observer reveals.

## 📦 Local Development

To run this project locally, make sure you have Node.js installed, then follow these steps:

```bash
# Clone the repository
git clone https://github.com/codingwithali72/ksij-hacakthon.git

# Navigate to the project directory
cd ksij-hacakthon

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🌐 Vercel Deployment (Recommended)

This project is fully optimized for a 1-click deployment on **Vercel**. 

1. Push your code to your GitHub repository.
2. Log into your [Vercel Dashboard](https://vercel.com/dashboard).
3. Click **Add New... > Project** and import the `ksij-hacakthon` repository.
4. Leave the Framework Preset as **Vite**.
5. Click **Deploy**.

### 🔒 Security Features Built-in
A `vercel.json` file is included in the root directory. When deployed to Vercel, it automatically applies essential security headers:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy: strict-origin-when-cross-origin`

## ⚙️ Customization (Data Source)

All text, dates, schedules, prizes, and FAQs are managed dynamically. To update the content without digging through React components, simply edit the `src/data/config.js` file.

*Note: Certain components (like the schedule and prize breakdown) may be temporarily commented out in `src/App.jsx` to prevent leaking details before the event. You can easily uncomment them when ready to reveal.*

---
**Developed for the Shia Community.**
