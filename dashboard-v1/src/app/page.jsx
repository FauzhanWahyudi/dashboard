"use client";

import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import CoinIcon from "./components/accessories/navbar-icons/coin-icon";
import ListicleButton from "./components/dropdown-buttons/listicle";
import ShortVideoButton from "./components/dropdown-buttons/shortVideo";
import ProductForm from "./components/ProductForm";
import MediaForm from "./components/MediaForm";

const HomePage = () => {
  const [isJenisVideoOpen, setIsJenisVideoOpen] = useState(true);
  const [isPersonalisasiOpen, setIsPersonalisasiOpen] = useState(false);
  const [isMediaProduk, setIsMediaProduk] = useState(false);

  const toggleJenisVideo = () => {
    setIsJenisVideoOpen((prev) => !prev);
    // setIsPersonalisasiOpen(false);
  };

  const togglePersonalisasi = () => {
    setIsPersonalisasiOpen((prev) => !prev);
    // setIsJenisVideoOpen(false);
  };

  const toggleMedia = () => {
    setIsMediaProduk((prev) => !prev);
    // setIsJenisVideoOpen(false);
  };

  return (
    <div className="container mx-auto rounded-lg bg-white px-6 pb-4 shadow-md">
      <h1 className="mb-4 text-2xl font-bold">Buat video kamu sekarang</h1>
      <p className="mb-6 text-gray-600">
        Buat video produk kamu sekarang dalam hitungan menit!
      </p>

      <div className="space-y-4">
        {/* Dropdown 1: Pilih Jenis Video */}
        <Dropdown
          isOpen={isJenisVideoOpen}
          toggleDropdown={toggleJenisVideo}
          title="1.Pilih Jenis Video"
          description={
            "Tentukan format video yang sesuai dengan kebutuhan konten Anda."
          }
        >
          <div className="w-full flex-row justify-center gap-12 md:flex md:gap-8 md:px-8">
            <ListicleButton />
            <ShortVideoButton />
          </div>
        </Dropdown>

        {/* Dropdown 2: Personalisasi Produk */}
        <Dropdown
          isOpen={isPersonalisasiOpen}
          toggleDropdown={togglePersonalisasi}
          title="2. Personalisasi Produk"
          description="Tambahkan informasi produk untuk video yang optimal."
        >
          <div className="w-full">
            {/* Form elements */}

            <ProductForm />
          </div>
        </Dropdown>

        {/* Dropdown 3: Media Produk */}
        <Dropdown
          isOpen={isMediaProduk}
          toggleDropdown={toggleMedia}
          title="3. Sesuaikan Media Produk"
          description="Atur media produk untuk video yang menarik"
        >
          <div
            className="w-full"
            onClick={() =>
              alert(
                "Sorry, Media form and other features are not available yet",
              )
            }
          >
            {/* Form elements */}

            <MediaForm />

            {/* <ProductForm /> */}
          </div>
        </Dropdown>

        <button className="flex w-full items-center justify-center gap-2 rounded bg-purple-500 px-6 py-3 text-white hover:bg-purple-600 focus:outline-none">
          <CoinIcon />
          Buat 1 video
        </button>
      </div>
    </div>
  );
};

export default HomePage;
