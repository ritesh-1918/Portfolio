# Modern Portfolio Template

A high-performance, dark-themed portfolio template built with Next.js, Tailwind CSS, and Framer Motion. This template is designed to be easily configurable and ready for deployment.

![Portfolio Preview](./public/og.png)

## ✨ Features

- ⚡ **Next.js 14 App Router**: Modern and fast
- 🎨 **Tailwind CSS**: Utility-first styling
- 🎭 **Framer Motion**: Smooth animations
- 🌗 **Dark Mode First**: Premium dark aesthetic
- 📱 **Fully Responsive**: Works perfectly on all devices
- 📝 **Easy Configuration**: Edit all content from dedicated data files
- 🚀 **SEO Optimized**: Built-in metadata configuration
- 📧 **Contact Form Ready**: Formcarry integration support

## 📦 Getting Started

### 1. Unzip the Project
Extract the downloaded zip file to a folder on your computer.

### 2. Install Dependencies
Open your terminal and navigate to the project directory:
```bash
cd portfolio-template
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🛠 Configuration Guide

This template is designed to be customized without touching complex component code. All content is stored in the `data/` directory.

### Global Settings (`data/config.ts`)

The `data/config.ts` file is your central command center. Edit this file to change:

- **Site Metadata**: Title, description, URL, and OG image
- **Personal Info**: Your name, email, location, and social links
- **Hero Section**: Status badge, main title, subtitle, stats cards, and CTA buttons
- **About Section**: Bio, quick info stats, and action buttons
- **Contact & Footer**: Contact details and footer links

### Education (`data/education.ts`)
Add your educational background with detailed descriptions and skills acquired.

### Experience (`data/experience.ts`)
Add your professional work experience including roles, companies, dates, descriptions, achievements, and tech stacks.

### Skills (`data/skills.ts`)
Organize your skills into categories (Frontend, Backend, Tools) with proficiency levels and icons.

### Services (`data/services.tsx`)
Define the services you offer. This file uses `.tsx` to allow you to paste SVG icons directly.

## 📧 Contact Form Setup (Formcarry)

The contact form is pre-configured to work with [Formcarry](https://formcarry.com), a free form backend service.

### Step 1: Create Formcarry Account
1. Go to [https://formcarry.com](https://formcarry.com)
2. Sign up for a free account (50 submissions/month)

### Step 2: Get Your Form Endpoint
1. After logging in, click "Create New Form"
2. Copy your unique form endpoint URL (looks like: `https://formcarry.com/s/YOUR_FORM_ID`)

### Step 3: Update Contact Component
Open `components/Contact.tsx` and find the `handleSubmit` function (around line 116):

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  // Replace with your Formcarry endpoint
  const formData = new FormData(e.target as HTMLFormElement);
  
  try {
    const response = await fetch('https://formcarry.com/s/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
      (e.target as HTMLFormElement).reset();
    }
  } catch (error) {
    setIsSubmitting(false);
    alert('Failed to send message. Please try again.');
  }
};
```

### Step 4: Add Name Attributes to Form Fields
Ensure all form inputs have `name` attributes:
- Name field: `name="name"`
- Email field: `name="email"`
- Message field: `name="message"`

That's it! Your contact form will now send submissions to your Formcarry dashboard.

## 🚀 Deployment Guide (Vercel)

Deploy your portfolio to Vercel in minutes - it's free and automatic!

### Method 1: Deploy via GitHub (Recommended)

#### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Initialize git in your project folder:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [Vercel](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live in ~2 minutes at `your-project.vercel.app`!

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Custom Domain Setup
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `yourname.com`)
4. Update your domain's DNS settings as instructed by Vercel

### Environment Variables (Optional)
If you need to add environment variables (like API keys):
1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add your variables (e.g., `FORMCARRY_ENDPOINT`)
3. Redeploy your project

## 📝 Customization Tips

### Changing Colors
Edit `tailwind.config.js` to change the primary color:
```js
theme: {
  extend: {
    colors: {
      primary: '#your-color-here'
    }
  }
}
```

### Adding New Sections
1. Create a new component in `components/`
2. Import it in `app/page.tsx`
3. Add data to the appropriate file in `data/`

### Updating Images
Replace images in the `public/images/` directory with your own. Keep the same filenames or update the paths in `data/config.ts`.

## 🎯 What's Included

- ✅ Hero section with animated stats
- ✅ About section with profile image
- ✅ Skills showcase with progress bars
- ✅ Experience timeline
- ✅ Education timeline
- ✅ Services grid
- ✅ Contact form with success modal
- ✅ Footer with social links
- ✅ Responsive navbar
- ✅ Smooth scroll animations
- ✅ Dark mode enforced

## 🆘 Support

If you encounter any issues:
1. Check that all dependencies are installed: `npm install`
2. Clear Next.js cache: `rm -rf .next`
3. Restart dev server: `npm run dev`

## 📄 License

This template is licensed for personal and commercial use as per your purchase tier.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
