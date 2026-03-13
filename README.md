# SNAPSHOT - Premium Photo Gallery

SNAPSHOT is a modern, responsive photo gallery web application built with React and Vite. It features a curated collection of high-quality photographs, a dedicated favorites system, and a premium user interface.

## ✨ Features

- **Dynamic Gallery**: Explores beautiful imagery fetched from the Picsum API.
- **Search & Filter**: Real-time filtering by author name.
- **Favorites System**: Save photos for later and view them in a dedicated "Favorites" section.
- **Persistence**: Your favorites are saved automatically in your browser's local storage.
- **Premium UI**: Crafted with a focus on aesthetics, featuring smooth animations, glassmorphism, and a responsive layout.
- **Responsive Design**: Optimized for Desktop, Tablet, and Mobile devices.

## 🚀 Getting Started

Follow these steps to get the project running locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Photo-Gallery-Web-App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Navigate to `http://localhost:5173/` in your browser.

## 🛠️ Tech Stack

- **Frontend**: React 19 (Hooks, Reducers, Context concepts)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS & Vanilla CSS
- **API**: [Picsum Photos API](https://picsum.photos/)

## 🌐 Deployment

This project is optimized for easy deployment to modern cloud platforms.

### Vercel (Recommended)
1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project into [Vercel](https://vercel.com/import).
3. Vercel will automatically detect Vite and deploy your app.

### Manual Build
To create a production-ready bundle:
```bash
npm run build
```
The output will be in the `dist/` directory, which can be served by any static web server.

---

Built as part of the **Celebrare Frontend Assignment**.
