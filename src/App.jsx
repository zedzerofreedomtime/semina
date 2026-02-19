import { useState } from "react";

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
}
