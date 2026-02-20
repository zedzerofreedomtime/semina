import CodeBlock from "../components/CodeBlock";

export default function Contact() {
  const homeJsx = `export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-orange-600">
          Responsive ด้วย Tailwind CSS
        </h1>
        <p className="text-gray-600 mt-2">
          Workshop สำหรับผู้เริ่มต้น
        </p>
      </div>
    </div>
  );
}
`;

  const navbarBasic = `export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white px-6 py-4">
      <div className="flex justify-between">
        <div className="font-bold">MyWeb</div>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Workshop</li>
        </ul>
      </div>
    </nav>
  );
}
`;

  const appJsx = `import Navbar from "./Navbar";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
`;

  const hideMenu = `<ul className="hidden md:flex gap-6">`;

  const hideMe = `<ul className="flex gap-6">`;

  const menuButton = `<button className="md:hidden text-2xl">
  ☰
</button>`;

  const useStateCode = `import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
`;

  const mobileMenu = `{open && (
  <ul className="md:hidden mt-4 space-y-3">
    <li>Home</li>
    <li>About</li>
    <li>Workshop</li>
  </ul>
)}
`;

  const toggleButton = `<button
  className="md:hidden text-2xl"
  onClick={() => setOpen(!open)}
>
  ☰
</button>`;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
        <h1 className="text-3xl font-bold text-orange-600">
          Workshop : Responsive Navbar ด้วย Tailwind CSS
        </h1>
      </div>

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          1) โค้ดหน้าแรก → ใส่ที่ไฟล์ไหน?
        </h2>
        <p>ไฟล์: src/Home.jsx</p>

        <CodeBlock code={homeJsx} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>max-w-4xl mx-auto ใช้คุมความกว้างจอใหญ่</li>
          <li>p-8 ใช้เว้นขอบทุกอุปกรณ์</li>
          <li>ตอนนี้ยังไม่ Responsive แต่เป็นฐานที่ดีสำหรับทุกจอ</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          2) Navbar พื้นฐาน → ใส่ที่ไฟล์ไหน?
        </h2>
        <p>ไฟล์: src/Navbar.jsx</p>

        <CodeBlock code={navbarBasic} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>flex justify-between ทำให้โลโก้ชิดซ้าย เมนูชิดขวา</li>
          <li>ตอนนี้ทุกขนาดจอเห็นเหมือนกัน</li>
          <li>ยังไม่ Responsive เพราะตั้งใจทำให้เห็นโครงก่อน</li>
        </ul>

        <p className="mt-4">นำไปแสดงในไฟล์: src/App.jsx</p>
        <CodeBlock code={appJsx} />
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          3) ซ่อนเมนูบนมือถือ
        </h2>
        <p>ใส่ใน: Navbar.jsx</p>
        <p>code เดิม</p>

        <CodeBlock code={hideMe} />

         <p>แก้เป็น</p>

        <CodeBlock code={hideMenu} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>hidden ทำให้มือถือไม่เห็นเมนู</li>
          <li>md:flex ทำให้ Tablet และ Desktop แสดง</li>
          <li>Responsive เกิดจาก class แค่บรรทัดเดียว</li>
        </ul>
      </section>

      

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          4) ปุ่มเมนูสำหรับมือถือ
        </h2>
        <p>ใส่ใน: Navbar.jsx</p>
        <p>ใต้ &lt;ul&gt; ยังอยู่ใน &lt;div className="flex justify-between"&gt;</p>

        <CodeBlock code={menuButton} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>md:hidden ทำให้จอใหญ่ไม่เห็น</li>
          <li>แสดงเฉพาะบนมือถือ</li>
          <li>ใช้แทนเมนูแบบเต็ม</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          5) useState ต้องใส่ตรงไหน?
        </h2>
        <p>ใส่ใน: Navbar.jsx</p>

        <CodeBlock code={useStateCode} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>open เป็น false หมายถึงเมนูปิด</li>
          <li>open เป็น true หมายถึงเมนูเปิด</li>
          <li>ใช้ควบคุมเมนูบนมือถือ</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          6) Mobile Menu
        </h2>
        <p>ใส่ ใต้ div flex แต่ยังอยู่ใน ยังอยู่ใน &lt;nav&gt;</p>


        <CodeBlock code={mobileMenu} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>แสดงเฉพาะตอนเมนูเปิด</li>
          <li>เรียงเมนูแนวตั้ง</li>
          <li>ไม่ใช้บนจอใหญ่</li>
        </ul>
      </section>

      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          7) เชื่อมปุ่มกับ state
        </h2>

        <CodeBlock code={toggleButton} />

        <ul className="list-disc ml-6 text-gray-700">
          <li>คลิกเพื่อเปิดและปิดเมนู</li>
          <li>ไม่ต้องเขียน JavaScript ซับซ้อน</li>
        </ul>
      </section>
    </div>
  );
}