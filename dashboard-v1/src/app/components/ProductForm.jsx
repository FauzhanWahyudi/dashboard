import { useState } from "react";

export default function ProductForm() {
  const [nuance, setNuance] = useState("Promotional");
  const [language, setLanguage] = useState("id");
  const [productName, setProductName] = useState("");
  const [storeName, setStoreName] = useState("");
  const [description, setDescription] = useState("");
  const [audience, setAudience] = useState([
    "Wanita",
    "Kulit sensitif",
    "Dehidrasi",
  ]);

  const toggleLanguage = (lang) => setLanguage(lang);
  const removeTag = (tag) => setAudience(audience.filter((a) => a !== tag));

  return (
    <div className="w-full rounded-lg bg-white p-6 text-gray-900">
      {/* Form Fields */}
      <div className="grid grid-cols-2 gap-4">
        {/* Nuance */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Nuansa<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-gray-100 p-3">
            <span>🎭</span>
            <span>{nuance}</span>
          </div>
        </div>

        {/* Language Selection */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Bahasa<span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-2">
            <button
              className={`rounded-lg px-4 py-2 ${language === "id" ? "bg-purple-600 text-white" : "border border-gray-300 bg-gray-100"}`}
              onClick={() => toggleLanguage("id")}
            >
              🇮🇩 Bahasa Indonesia
            </button>
            <button
              className={`rounded-lg px-4 py-2 ${language === "en" ? "bg-purple-600 text-white" : "border border-gray-300 bg-gray-100"}`}
              onClick={() => toggleLanguage("en")}
            >
              🇬🇧 Bahasa Inggris
            </button>
          </div>
        </div>

        {/* Product Name */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Nama Produk<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white p-3"
            placeholder="Sunscreen SPF 50+++"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Store Name */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Nama Toko<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-300 bg-white p-3"
            placeholder="Selfmology"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </div>

        {/* Product Description */}
        <div className="col-span-2">
          <label className="mb-1 block text-sm font-medium">
            Deskripsi Produk<span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full rounded-lg border border-gray-300 bg-white p-3"
            rows="3"
            placeholder="Krim, wajah, pelembap, ringan, mengurangi kerutan..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Target Audience */}
        <div>
          <label className="mb-1 block w-full text-sm font-medium">
            Target Audiens
          </label>
          <div className="rounded-lg border">
            <textarea
              className="mb-2 w-full p-2 text-sm text-gray-500"
              onChange={(e) => setAudience(e.target.value.split(","))}
              placeholder={"Contoh: Kecantikan alami, dry skin"}
              value={audience.join(", ")}
            ></textarea>
            <div className="m-4 flex flex-wrap gap-2">
              {audience.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center rounded-full bg-gray-200 px-3 py-1 text-sm"
                >
                  {tag}{" "}
                  <button
                    onClick={() => removeTag(tag)}
                    className="ml-2 text-gray-500 hover:text-red-500"
                  >
                    ✖
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
