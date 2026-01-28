# Autobotus - Car Delivery Service Website

A modern website for car delivery services from USA and Europe.

## 🚀 Deploy to Vercel

### Option 1: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

### Option 2: Manual Deploy

1. Push this code to your GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` (important!)
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`
6. Click "Deploy"

### Environment Variables (Optional)
If you plan to add a backend later, set:
- `REACT_APP_BACKEND_URL` - Your backend API URL

## 🌐 Custom Domain (autobotus.lt)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `autobotus.lt`
4. Follow Vercel's DNS configuration instructions
5. Add these DNS records at your domain registrar:
   - Type: `A`, Name: `@`, Value: `76.76.19.19`
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

## 📦 Tech Stack

- React 19
- React Router DOM
- Tailwind CSS
- Shadcn UI Components
- Lucide React Icons

## 🛠 Local Development

```bash
cd frontend
yarn install
yarn start
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # UI components
│   ├── pages/          # Page components
│   ├── context/        # React context (language)
│   ├── data/           # Translations & calculator config
│   └── App.js          # Main app
├── public/             # Static files
├── vercel.json         # Vercel configuration
└── package.json
```

## 🌍 Features

- 5 Languages (EN, DE, LT, RU, UK)
- USA Delivery Calculator
- EU Delivery Contact Form
- Responsive Design
- WhatsApp, Telegram, Viber integration
