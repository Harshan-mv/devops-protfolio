# Harshan's DevOps Portfolio

Welcome to your new Astro.js portfolio website! This project is a statically generated site that features a modern dark-themed DevOps design, optimal performance, and markdown-based blog routing.

## 🚀 Running Locally

To start working on the project locally:

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```

3. **View the Site**:
   Open your browser and navigate to `http://localhost:4321`. Any changes you make to the components will automatically refresh the page.

## 🌐 Deploying the Project

### 1. GitHub
To safely back up your code and connect it to a hosting platform, initialize a Git repository:
```bash
git init
git add .
git commit -m "Initial commit - Portfolio website complete"
git branch -M main
```
*Create a new repository on GitHub and link it:*
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Cloudflare Pages
This project is pre-configured for Cloudflare Pages with `wrangler.toml` and `@astrojs/cloudflare`.
1. Log in to your Cloudflare Dashboard.
2. Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Select the GitHub repository you just created.
4. **Build Settings**:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Cloudflare process the `.github/workflows/deploy.yml` (if you are utilizing GitHub Actions) or deploy intrinsically using the connected repository.

## 📝 What's Next & Missing APIs?

As of now, the portfolio contains all the visual and structural scaffolding you requested. However, you might want to look at:

1. **Contact Form API ($)**: 
   Currently, the `Contact.astro` button behaves via a generic email action/WhatsApp CTA. If you want a functional contact form (HTML `<form>`) in the future without managing a backend server, look into setting up an API through:
   - [Formspree](https://formspree.io/)
   - [EmailJS](https://www.emailjs.com/)
   - Or configure a custom Cloudflare Worker.

2. **Blog Posts Mapping**:
   You can add more blog articles by simply adding new `.md` files into `src/content/blog/`. Ensure that the [YAML Frontmatter] at the top of the file exactly matches the schema in `src/content/config.ts` (requires `title`, `description`, `pubDate`, `readTime`, `tags`).

3. **Analytics**:
   There are currently no analytics scripts attached. Google Analytics or Cloudflare Web Analytics can be dropped securely inside the `<head>` of `src/pages/index.astro`.
