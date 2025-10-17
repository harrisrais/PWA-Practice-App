# 🚀 My First PWA — To-Do App (Next.js + Tailwind + next-pwa)

This is my **first Progressive Web App (PWA)** built using **Next.js (App Router)**, **TailwindCSS**, and **next-pwa**.  
It’s a simple, offline-ready **To-Do List App** that stores tasks locally, allowing you to manage your daily activities even without an internet connection.

---

## 🌟 Features

- ✅ **Add / Delete Tasks** — Simple and clean UI to manage your tasks  
- ✅ **Offline Support** — Works even without internet (thanks to Service Worker caching)  
- ✅ **Persistent Storage** — Tasks are saved in `localStorage`  
- ✅ **Installable App** — Can be installed on mobile or desktop devices  
- ✅ **Responsive Design** — Built with TailwindCSS for a mobile-first experience  
- ✅ **Next.js App Router** — Modern file-based routing and optimized performance  

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-------------|----------|
| [Next.js 15](https://nextjs.org/) | React framework for production |
| [TailwindCSS](https://tailwindcss.com/) | Utility-first CSS styling |
| [next-pwa](https://github.com/shadowwalker/next-pwa) | PWA & service worker integration |
| [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) | Client-side persistence |

---

## 📁 Project Structure
📦 my-pwa-app

├── public/
│   ├── manifest.webmanifest
│   ├── icons/
│   └── favicon.ico

├── src/
│   └── app/
│       ├── components/
│       │   └── TodoList.jsx
│       ├── layout.js
│       └── page.js

├── next.config.mjs
├── package.json
└── README.md
