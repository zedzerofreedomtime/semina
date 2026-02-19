import CodeBlock from "../components/CodeBlock";

export default function About() {
  const createVite = `npm create vite@latest`;

  const installTailwind = `npm install tailwindcss @tailwindcss/vite`;

  const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`;

  const runDev = `npm run dev`;

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
        <h1 className="text-3xl font-bold text-orange-600">
          วิธีติดตั้ง React + Tailwind CSS (Vite)
        </h1>
        <p className="text-gray-600 mt-2">
          ทำตามทีละขั้น ใช้งานได้จริง เหมาะสำหรับ Workshop
        </p>
      </div>

      {/* Step 1 */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          1) สร้างโปรเจกต์ React ด้วย Vite
        </h2>
        <p>เปิด Terminal ใน VS Code แล้วพิมพ์:</p>
        <CodeBlock code={createVite} />
      </section>

      {/* Step 2 */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          2) ติดตั้ง Tailwind CSS
        </h2>

        <p>
          เข้าเว็บ:
          <a
            href="https://tailwindcss.com/docs/installation/using-vite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 ml-2 underline break-all"
          >
            https://tailwindcss.com/docs/installation/using-vite
          </a>
        </p>

        <p>เปิด Terminal แล้วพิมพ์:</p>
        <CodeBlock code={installTailwind} />

        <p className="leading-relaxed">
          เปิดไฟล์{" "}
          <code className="bg-orange-100 px-1 rounded">vite.config.js</code>
          <br />
          เพิ่ม{" "}
          <code className="bg-orange-100 px-1 rounded">
            import tailwindcss from '@tailwindcss/vite'
          </code>{" "}
          ไว้ใต้{" "}
          <code className="bg-orange-100 px-1 rounded">
            import react from '@vitejs/plugin-react'
          </code>
          <br />
          และใส่{" "}
          <code className="bg-orange-100 px-1 rounded">
            tailwindcss()
          </code>{" "}
          ต่อท้าย{" "}
          <code className="bg-orange-100 px-1 rounded">
            react(),
          </code>
        </p>

        <CodeBlock code={viteConfig} />
      </section>

      {/* Step 3 */}
      <section className="bg-white p-6 rounded-xl shadow space-y-3">
        <h2 className="text-xl font-semibold text-orange-500">
          3) รันโปรเจกต์
        </h2>
        <p>พิมพ์คำสั่ง:</p>
        <CodeBlock code={runDev} />

        <p>เปิดเว็บจากลิงก์ที่แสดงใน Terminal เช่น:</p>
        <p className="text-blue-600 font-medium">
          http://localhost:5173
        </p>
      </section>
    </div>
  );
}