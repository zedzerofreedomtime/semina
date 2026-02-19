export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
        <h1 className="text-3xl font-bold text-orange-600">
          Welcome
        </h1>
        <p className="text-gray-600 mt-2">
          การใช้ Responsive UI ด้วย Tailwind CSS
        </p>
      </div>

      {/* Content */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
        {/* useState */}
        <div>
          <h3 className="font-semibold text-orange-600">useState</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 text-sm overflow-x-auto">
{`const [open, setOpen] = useState(false);`}
          </pre>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>ใช้เก็บสถานะเมนูมือถือ</li>
            <li>false = ซ่อนเมนู</li>
            <li>true = แสดงเมนู</li>
          </ul>
        </div>

        {/* Navbar */}
        <div>
          <h3 className="font-semibold text-orange-600">Navbar Container</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 text-sm overflow-x-auto">
{`<nav className="bg-blue-600 text-white px-6 py-4">`}
          </pre>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>bg-blue-600 → สีพื้นหลัง</li>
            <li>px-6 py-4 → padding ซ้ายขวา / บนล่าง</li>
            <li>ใช้ Tailwind แทน CSS file</li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div>
          <h3 className="font-semibold text-orange-600">
            Desktop / iPad Menu
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 text-sm overflow-x-auto">
{`<ul className="hidden md:flex gap-6">`}
          </pre>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>hidden → ซ่อนก่อน (มือถือ)</li>
            <li>md:flex → ตั้งแต่ iPad / Desktop แสดงเป็น flex</li>
            <li>gap-6 → ระยะห่างเมนู</li>
            <li className="font-medium">Responsive อยู่ในบรรทัดเดียว</li>
          </ul>
        </div>

        {/* Hamburger */}
        <div>
          <h3 className="font-semibold text-orange-600">
            ปุ่ม Hamburger (มือถือ)
          </h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 text-sm overflow-x-auto">
{`<button className="md:hidden text-2xl">☰</button>`}
          </pre>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>md:hidden → iPad / Desktop ไม่เห็น</li>
            <li>เห็นเฉพาะมือถือ</li>
            <li>ใช้แทนเมนูเต็มเพราะพื้นที่น้อย</li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div>
          <h3 className="font-semibold text-orange-600">Mobile Menu</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 text-sm overflow-x-auto">
{`{open && (
  <ul className="md:hidden mt-4 space-y-3">
)}`}
          </pre>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>แสดงเมนูเมื่อ open === true</li>
            <li>md:hidden → จอใหญ่ไม่ต้องใช้เมนูนี้</li>
            <li>space-y-3 → ระยะห่างแนวตั้ง</li>
          </ul>
        </div>

        {/* Summary */}
        <div>
          <h3 className="font-semibold text-orange-600">
            📱 สรุปอุปกรณ์
          </h3>
          <div className="overflow-x-auto mt-2">
            <table className="w-full border border-gray-200 text-sm">
              <thead className="bg-orange-100">
                <tr>
                  <th className="border px-4 py-2 text-left">อุปกรณ์</th>
                  <th className="border px-4 py-2 text-left">สิ่งที่เห็น</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">🖥️ Desktop</td>
                  <td className="border px-4 py-2">โลโก้ + เมนูเต็ม</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">📱 iPad</td>
                  <td className="border px-4 py-2">เมนูยังอยู่</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">📱 Mobile</td>
                  <td className="border px-4 py-2">☰ + เมนูซ่อน</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Closing */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
          <p className="italic text-gray-700">
            “สุดท้ายนี้ Tailwind ไม่ได้ทำให้เว็บสวย<br />
            แต่มันทำให้ผมไม่เสียเวลาต่อยกับ CSS ขอบคุณครับ”
          </p>
        </div>
      </div>
    </div>
  );
}