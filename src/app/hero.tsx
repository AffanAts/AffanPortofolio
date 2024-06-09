"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography 
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-3xl !leading-tight text-3xl"   placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}          >
            Selamat Datang di Portofolio Pengembangan Website Saya! TESTfawfxxx
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"   placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}          >
            Saya Affan Haidar. Saya memiliki ketertarikan di bidang
            pengembangan web. Saya memiliki kemampuan bekerja sama dalam tim,
            kreatif, adaptif, dan memiliki kemampuan analisis yang baik. Saya
            memiliki motivasi dan dedikasi tinggi untuk mengembangkan karier
            secara profesional dan berkomitmen untuk memberikan kinerja terbaik
            bagi perusahaan. Di sini, Anda dapat melihat sekilas perjalanan saya
            dalam dunia pengembangan website.
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/new/Affan.jpg"
          className="h-[45rem] w-full rounded-xl object-cover transform scale-75 object-top" // tambahkan transform scale-75 untuk zoom out
        />
      </div>
    </header>
  );
}

export default Hero;
