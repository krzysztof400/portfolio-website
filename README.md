# portfolio-website
static portfolio website

https://krzysztof400.github.io/portfolio-website/

# Portfolio Website - Vite + React + Tailwind Setup

This is your portfolio website converted from static HTML to a modern React application using Vite and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Initialize the project:**
```bash
npm create vite@latest portfolio-website --template react
cd portfolio-website
```

2. **Replace the default files with the provided code files**

3. **Install dependencies:**
```bash
npm install
npm install -D tailwindcss@3.3.5 postcss@8.4.24 autoprefixer@10.4.14
npm install react-router-dom
```

4. **Initialize Tailwind CSS:**
```bash
npx tailwindcss init -p
```

5. **Create the file structure:**
```
src/
├── components/
│   ├── Header.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── AboutMe.jsx
│   └── Experience.jsx
├── pages/
│   ├── Home.jsx
│   ├── Math.jsx
│   ├── Philosophy.jsx
│   ├── History.jsx
│   └── Culture.jsx
├── App.jsx
├── main.jsx
└── index.css
```

6. **Copy your assets:**
- Create a `public/icons/` directory
- Copy your profile picture and social media icons to `public/icons/`

### Development

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to GitHub Pages

```bash
npm run build
# Copy the contents of the dist folder to your gh-pages branch
```

## 🎨 Key Features

### What's New:
- **Component-based architecture** - Modular, reusable components
- **React Router** - Client-side routing for seamless navigation
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool with hot module replacement
- **Responsive design** - Mobile-first approach with Tailwind breakpoints
- **Interactive skills** - Click to expand code examples
- **Smooth scrolling** - Better user experience

### Improvements:
- **Better performance** - Vite's optimized bundling
- **Developer experience** - Hot reload, better debugging
- **Maintainability** - Separated concerns, cleaner code structure
- **Scalability** - Easy to add new sections or features
- **Modern tooling** - Latest React patterns and hooks

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: Side navigation with fixed header
- **Mobile**: Stacked layout with mobile-optimized navigation

## 🛠 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Declarative routing
- **PostCSS** - CSS preprocessing

## 📂 File Structure Explanation

- `src/components/` - Reusable UI components
- `src/pages/` - Different page views
- `src/App.jsx` - Main application component with routing
- `src/main.jsx` - Application entry point
- `tailwind.config.js` - Tailwind configuration
- `vite.config.js` - Vite configuration

Your portfolio is now modernized with better maintainability, performance, and development experience!