import { useState } from "react";
import { FiUpload, FiTrash } from "react-icons/fi";

export default function MediaForm() {
  const [media, setMedia] = useState([
    { id: 1, src: "https://picsum.photos/200" },
    { id: 3, src: "https://picsum.photos/200" },
    { id: 2, src: "https://picsum.photos/200" },
  ]);
  const [logos, setLogos] = useState([
    { id: 1, src: "https://picsum.photos/200" },
    { id: 2, src: "https://picsum.photos/200" },
    { id: 3, src: "https://picsum.photos/200" },
    { id: 4, src: "https://picsum.photos/200" },
  ]);
  const handleDeleteMedia = (id) => {
    setMedia(media.filter((item) => item.id !== id));
  };

  return (
    <div className="w-full rounded-lg bg-white p-6 text-black">
      {/* Product Image Preview */}
      <div className="flex items-center space-x-6">
        <div className="flex-1 rounded-lg bg-gray-100 p-6">
          <img
            src="https://picsum.photos/200"
            alt="Main Product"
            className="mx-auto h-64 w-64 rounded-lg"
          />
          <div className="mt-3 flex justify-center space-x-2">
            {media.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt="Product"
                className="h-16 w-16 rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Media Upload Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold">
            Media Produk <span className="text-red-500">*</span>
          </h3>
          <div className="mt-2 flex space-x-2">
            <button className="flex h-16 w-16 items-center justify-center rounded-lg border border-gray-400 bg-gray-200">
              <FiUpload className="h-6 w-6 text-gray-600" />
            </button>
            {media.map((item) => (
              <div key={item.id} className="relative h-16 w-16">
                <img
                  src={item.src}
                  alt="Product"
                  className="h-full w-full rounded-lg"
                />
                <button
                  onClick={() => handleDeleteMedia(item.id)}
                  className="absolute right-0 top-0 rounded-full bg-gray-800 p-1"
                >
                  <FiTrash className="h-4 w-4 text-white" />
                </button>
              </div>
            ))}
          </div>

          {/* Logo Section */}
          <h3 className="mt-6 text-lg font-semibold">
            Logo{" "}
            <span className="text-sm text-purple-600">
              📷 Disarankan oleh AI
            </span>
          </h3>
          <div className="mt-2 flex space-x-2">
            <button className="flex h-16 w-16 items-center justify-center rounded-lg border border-gray-400 bg-gray-200">
              <FiUpload className="h-6 w-6 text-gray-600" />
            </button>
            {logos.map((logo) => (
              <img
                key={logo.id}
                src={logo.src}
                alt="Logo"
                className="h-16 w-16 rounded-lg"
              />
            ))}
          </div>

          <p className="mt-2 text-right text-sm text-gray-500">0/5 dipilih</p>
        </div>
      </div>
    </div>
  );
}
