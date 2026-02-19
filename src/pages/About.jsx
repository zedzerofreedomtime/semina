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
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">
        วิธีติดตั้ง React + Tailwind CSS (Vite)
      </h1>

      {/* STEP 1 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          1) สร้างโปรเจกต์ React ด้วย Vite
        </h2>
        <p>เปิด Terminal ใน VS Code แล้วพิมพ์:</p>
        <CodeBlock code={createVite} />
      </section>

      {/* STEP 2 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          2) ติดตั้ง Tailwind CSS
        </h2>

        <p>
          เข้าเว็บ:
          <span className="text-blue-600 ml-2">
            https://tailwindcss.com/docs/installation/using-vite
          </span>
        </p>

        <p>เปิด Terminal แล้วพิมพ์:</p>
        <CodeBlock code={installTailwind} />

        <p>
          เปิดไฟล์ <code className="bg-gray-200 px-1">vite.config.js</code>  
          แล้วเพิ่มโค้ดด้านล่าง
        </p>

        <CodeBlock code={viteConfig} />
      </section>

      {/* STEP 3 */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">
          3) รันโปรเจกต์
        </h2>

        <p>พิมพ์คำสั่ง:</p>
        <CodeBlock code={runDev} />

        <p>
          เปิดเว็บจากลิงก์ที่แสดงใน Terminal เช่น:
        </p>
        <p className="text-blue-600">
          http://localhost:5173
        </p>
      </section>
    </div>
  );
}