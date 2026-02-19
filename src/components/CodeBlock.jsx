import { useState } from "react";

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copyCode}
        className="absolute top-2 right-2 bg-blue-600 text-white text-sm px-3 py-1 rounded hover:bg-blue-700"
      >
        {copied ? "✅ Copied!" : "📋 Copy"}
      </button>

      <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}