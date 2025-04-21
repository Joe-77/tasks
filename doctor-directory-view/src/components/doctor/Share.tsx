import { useState } from "react";
import { FaFacebook, FaCopy } from "react-icons/fa";

export default function Share() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex gap-3 mb-6">
      <button
        onClick={handleShareFacebook}
        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer"
      >
        <FaFacebook />
        Share
      </button>
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition cursor-pointer"
      >
        <FaCopy />
        {copied ? "Copied!" : "Copy Link"}
      </button>
    </div>
  );
}
