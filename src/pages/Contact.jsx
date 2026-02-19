import CodeBlock from "../components/CodeBlock";

export default function Contact() {
  const indexCss = `@import "tailwindcss";`;

  const mainJsx = `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

  const appJsx = `import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="bg-blue-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">MyWeb</div>

          <ul className="hidden md:flex gap-6">
            <li className="cursor-pointer hover:underline">Home</li>
            <li className="cursor-pointer hover:underline">About</li>
            <li className="cursor-pointer hover:underline">Contact</li>
          </ul>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {open && (
          <ul className="md:hidden mt-4 space-y-3">
            <li className="border-b pb-2">Home</li>
            <li className="border-b pb-2">About</li>
            <li className="border-b pb-2">Contact</li>
          </ul>
        )}
      </nav>

      <main className="p-6">
        <h1 className="text-2xl font-bold mb-2">
          Responsive Navbar Workshop
        </h1>
        <p className="text-gray-600">
          ลองย่อ–ขยายหน้าจอ เพื่อดูผลลัพธ์บน Desktop, iPad และ Mobile
        </p>
      </main>
    </>
  );
}`;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
        <h1 className="text-3xl font-bold text-orange-600">
          Workshop : การทำ Responsive
        </h1>
        <p className="text-gray-600 mt-2">
          ทดลองสร้าง Responsive Navbar ด้วย Tailwind CSS
        </p>
      </div>

      {/* 1 โครงสร้างโปรเจกต์ (ไม่มีปุ่มก็อป) */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          1) โครงสร้างโปรเจกต์
        </h2>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
          <pre>{`tailwind-navbar-workshop/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ index.css`}</pre>
        </div>
      </section>

      {/* 2 index.css */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          2) index.css
        </h2>

        <CodeBlock code={indexCss} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>บรรทัดเดียวจบ</li>
          <li>Tailwind v4 ใช้ import แบบนี้แทน @tailwind base;</li>
          <li>CSS ถูก generate จาก class ที่เราใช้จริง</li>
        </ul>
      </section>

      {/* 3 main.jsx */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          3) main.jsx
        </h2>

        <CodeBlock code={mainJsx} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>เป็นจุดเริ่มต้นของ React</li>
          <li>แสดง &lt;App /&gt; ใน div #root</li>
          <li>import index.css เพื่อเปิดใช้ Tailwind ทั้งเว็บ</li>
        </ul>
      </section>

      {/* 4 App.jsx */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          4) App.jsx (โค้ดหลัก Workshop)
        </h2>

        <CodeBlock code={appJsx} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>Desktop แสดงเมนูแนวนอน</li>
          <li>Mobile ใช้ปุ่ม ☰</li>
          <li>md:flex / md:hidden คุม Responsive</li>
          <li>useState คุมเปิด–ปิดเมนู</li>
        </ul>
      </section>
    </div>
  );
}