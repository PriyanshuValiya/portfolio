import Image from "next/image";
import React from "react";

const skills = [
  {
    name: "HTML",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    height: 70,
    width: 70
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    height: 50,
    width: 50
  },
  {
    name: "JS",
    logo: "https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-3d-icon-download-in-png-blend-fbx-gltf-file-formats--html-logo-vue-angular-coding-lang-pack-logos-icons-7577991.png",
    height: 75,
    width: 75
  },
  {
    name: "Bootstrap",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    height: 70,
    width: 70
  },
  {
    name: "Node",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    height: 100,
    width: 100
  },
  {
    name: "Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    height: 150,
    width: 150
  },
  {
    name: "MongoDB",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s",
    height: 100,
    width: 100
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    height: 80,
    width: 80
  },
  {
    name: "Tailwind",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    height: 90,
    width: 90
  },
  {
    name: "Supabase",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpILZmD6N_Md53npkmDsGc9U96wXZqUfse_g&s",
    height: 80,
    width: 80
  },
  {
    name: "Nextjs",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    height: 120,
    width: 120
  },
  {
    name: "Docker",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    height: 140,
    width: 140
  },
  {
    name: "EC2",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh-cSSXi7IQPl-VLmmmQcJUzcSsR3S2YOjzg&s",
    height: 300,
    width: 300
  },
  {
    name: "Java",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    height: 60,
    width: 60
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    height: 90,
    width: 90
  },
  {
    name: "MySQL",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
    height: 110,
    width: 110
  },
  {
    name: "Figma",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    height: 60,
    width: 60
  },
  {
    name: "Git",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGp2RKrzqJF2Cu3dxnk2RGK_F7SSloJG-Wyw&s",
    height: 80,
    width: 80
  },
];

function Skill() {
  return (
    <div className="mt-8">
      <h2 className="text-center text-5xl font-Ovo">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-8 mb-20 px-10 sm:px-20">
        {skills.map((skill, idx) => (
          <div
            key={idx}   
            className="h-36 flex items-center justify-center p-4 border-[0.5px] border-gray-400 rounded-xl hover:-translate-y-1 duration-500 hover:shadow-black dark:bg-white dark:border-white dark:hover:shadow-white"
          >
            <Image
              src={skill.logo}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="mb-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
