import CodeBlock from "../components/CodeBlock";

export default function Contact() {
  const structure = `tailwind-navbar-workshop/
├─ index.html
├─ vite.config.js
├─ package.json
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  └─ index.css`;

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
    <div className="p-8 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold">
        Workshop : การทำ Responsive
      </h1>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          1) โครงสร้างโปรเจกต์
        </h2>
        <CodeBlock code={structure} />
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          2) src/index.css
        </h2>
        <CodeBlock code={indexCss} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>บรรทัดเดียวจบ</li>
          <li>Tailwind v4 ใช้ import แบบนี้แทน @tailwind base;</li>
          <li>CSS จะถูก generate อัตโนมัติจาก class ที่เราใช้</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          3) src/main.jsx
        </h2>
        <CodeBlock code={mainJsx} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>เป็นจุดเริ่มต้นของ React</li>
          <li>เอา {"<App />"} ไปแสดงใน div #root</li>
          <li>import index.css เพื่อให้ Tailwind ใช้ได้ทั้งเว็บ</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          4) src/App.jsx (โค้ดหลัก Workshop)
        </h2>
        <CodeBlock code={appJsx} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>Desktop: แสดงเมนูแนวนอน</li>
          <li>Tablet / Mobile: ซ่อนเมนู ใช้ปุ่ม ☰</li>
          <li>ใช้ md:hidden และ md:flex คุม Responsive</li>
          <li>useState ใช้เปิด–ปิดเมนูมือถือ</li>
        </ul>
      </section>
    </div>
  );
}