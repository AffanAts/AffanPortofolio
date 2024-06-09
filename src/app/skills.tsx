"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  { 
    icon: RectangleGroupIcon,
    title: "Pengembangan Web Frontend",
    children:
      "Menciptakan pengalaman web yang indah dan fungsional. Dengan menggunakan teknologi terbaru dan praktik terbaik, saya merancang dan membangun situs web yang melibatkan pengguna.",
  },
  {
    icon: SwatchIcon,
    title: "Tumpukan Teknologi",
    children:
      "Saya menguasai teknologi frontend paling populer di industri ini, termasuk HTML5, CSS3, SQL, JavaScript, dan library seperti React.js.",
  },
  {
    icon: HashtagIcon,
    title: "Pengembangan Backend",
    children:
      "Saya menggunakan GraphQL sebagai bahasa query dan juga bekerja dengan REST API. Saya memanfaatkan Hasura Cloud ataupun Google Cloud Platform untuk solusi backend yang efisien dan skalabel.",
  },
  {
    icon: EyeIcon,
    title: "Desain Berpusat pada Pengguna",
    children:
      "Pengembangan saya berjalan seiring dengan mata untuk desain. Saya menciptakan antarmuka pengguna yang tidak hanya fungsional tetapi juga estetis, memberikan perjalanan pengguna yang mulus dan menyenangkan.",
  },
];

 // {
  //   icon: DocumentTextIcon,
  //   title: "Testing and Quality Assurance",
  //   children:
  //     "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  // },
export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase"   placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}>
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4"   placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}>
          Apa yang saya lakukan
        </Typography>
        
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
