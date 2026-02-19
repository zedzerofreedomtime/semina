วิธีติดตั้ง React + Tailwind CSS (Vite)
1) สร้างโปรเจกต์ React ด้วย Vite
เปิด Terminal VS Code Terminal แล้วพิมพ์:
npm create vite@latest

2) ติดตั้ง Tailwind CSS
เข้าเว็บ https://tailwindcss.com/docs/installation/using-vite
เปิด Terminal VS Code Terminal แล้วพิมพ์:
npm install tailwindcss @tailwindcss/vite
เปิดไฟล์ vite.config.js แล้วพิมพ์
import tailwindcss from '@tailwindcss/vite'
ไว้ข้างล่าง 
import react from '@vitejs/plugin-react'
พิมพ์
tailwindcss()
ไว้ข้างหลัง
react(),

3) รันโปรเจกต์
npm run dev
เปิดเว็บจากลิงก์ที่แสดงใน Terminal เช่น:
•	http://localhost:5173
