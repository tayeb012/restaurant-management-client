# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Surge:
------
আপনি যদি surge এ deploy করেন আর আপনার রিলোড রিলেটেড সমস্যা হয় তাহলে নিচের কমান্ড গুলো ফলো করেনঃ 
১. npm run build (আপনার প্রজেক্ট বিল্ড করার জন্য)
২. cd dist (আপনার বিল্ড ফোল্ডার যাওয়ার জন্য)
৩. cp index.html 200.html (index.html ফাইলের কোড কপি করে 200.html নামের একটা ফাইল ক্রিয়েট হবে)
৪. cd .. (আপনার project এর root এ আসার জন্য)
৫. surge dist (deploy করার জন্য)

deploy শেষ হওয়ার link ওপেন করে চেক করে দেখেন আপনার ইস্যু ফিক্স হয়েছে কিনা।