import Image from "next/image";
import SideBar from "./components/sidebar";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="main-container">
      <SideBar />
      {/* Main Content */}
      <div className="right-container">
        {/* Navbar */}
        <Navbar />

        {/* Dashboard */}
        <div className="px-6 pb-4">
          <h2 className="text-xl font-bold md:text-2xl">
            Buat video kamu sekarang
          </h2>
          <p className="text-gray-500">
            Buat video produk kamu sekarang dalam hitungan menit!
          </p>

          {/* Step Sections */}
          <div className="mt-6 space-y-4">
            {/* Step 1 */}
            <div className="rounded-xl bg-white p-4 shadow-md">
              <h3 className="text-lg font-semibold">1. Pilih Jenis Video</h3>
              <p className="text-gray-500">
                Tentukan format video yang sesuai dengan kebutuhan konten Anda.
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="rounded-lg bg-purple-500 px-4 py-2 text-white">
                  Listicle (3-5 Detik)
                </button>
                <button className="rounded-lg border border-gray-300 px-4 py-2">
                  Video Pendek (5-10 Detik)
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-xl bg-white p-4 shadow-md">
              <h3 className="text-lg font-semibold">2. Personalisasi Produk</h3>
              <div className="mt-2 flex space-x-2">
                <span className="rounded-full bg-purple-200 px-3 py-1 text-sm text-purple-600">
                  Promosional
                </span>
                <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-600">
                  Selfmology
                </span>
                <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-600">
                  3+
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-xl bg-white p-4 shadow-md">
              <h3 className="text-lg font-semibold">
                3. Sesuaikan Media Produk
              </h3>
              <div className="mt-2 flex space-x-4">
                <div className="h-10 w-10 rounded-lg bg-purple-200"></div>
                <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
                <div className="h-10 w-10 rounded-lg bg-gray-200"></div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="mt-6 w-full rounded-lg bg-purple-500 py-2 text-lg text-white">
            Buat Video 🎥 1
          </button>
        </div>
      </div>
    </div>
  );
  // );
}
