import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import code_hire from "./code-hire.png";
import lesson_appreciation from "./lesson_appreciation.png";
import gssoc from "./gssoc.png";
import gamma from "./gamma.png";
import lesson_portal from "./lesson-portal.png";
import v0_clone from "./v0-clone.png";
import code_hire_tech from "./code-hire-tech.png";
import google_notes from "./google-notes.png";
import youtube from "./youtube.png";
import shopcart from "./shopcart.png";
import weather from "./weather.png";
import shopdeal from "./shopdeal.png";
import figma from "./figma.png";

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  code_hire,
  lesson_appreciation,
  gssoc,
  gamma,
  lesson_portal,
  v0_clone,
  code_hire_tech,
  google_notes,
  youtube,
  shopcart,
  weather,
  shopdeal,
  figma
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Projects",
    description: "Built more than 17 projects",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Home",
    description: "Surat, Gujarat",
  },
];

export const projects = [
  {
    title: "CodeHire",
    description: "AI-Powered mock interview taker plateform",
    image: assets.code_hire_tech,
    tech: ["Next.js", "Node", "Express", "MongoDB"],
    prodUrl: "https://code-hire.priyanshuvaliya.me",
  },
  {
    title: "v0-clone",
    description: "AI based online website generator",
    image: assets.v0_clone,
    tech: ["Next.js", "Supabase", "Tailwind", "Gemini API"],
    prodUrl: "https://v0-clone-azure.vercel.app",
  },
  {
    title: "Lesson Planning",
    description: "College's exam planner portal",
    image: assets.lesson_portal,
    tech: ["Next.js", "Node", "Supabase", "Typescript"],
    prodUrl:
      "https://github.com/PriyanshuValiya/lesson-planning-application-v1",
  },
];

export const moreProjects = [
  {
    title: "CodeHire",
    description: "AI-Powered mock interview taker plateform",
    image: assets.code_hire_tech,
    tech: ["Next.js", "Node", "Express", "MongoDB"],
    prodUrl: "https://code-hire.priyanshuvaliya.me",
    githubUrl: "https://github.com/PriyanshuValiya/CodeHire",
    feats: [
      "Includes Technical, Behavioral, and Aptitude rounds",
      "AI-Powered resume generator, Highly efficient ATS checker",
      "Selected for College Project for University Execution",
    ],
  },
  {
    title: "v0-clone",
    description: "AI based online website generator",
    image: assets.v0_clone,
    tech: ["Next.js", "Supabase", "Tailwind", "Gemini API", "Clerk"],
    prodUrl: "https://v0-clone-azure.vercel.app",
    githubUrl: "https://github.com/PriyanshuValiya/v0-clone",
    feats: [
      "AI-Powered static website generator",
      "Chat based website editor",
      "Includes PayPal api for subscriptions",
    ],
  },
  {
    title: "Lesson Planning",
    description: "College's exam planner portal",
    image: assets.lesson_portal,
    tech: ["Next.js", "Node", "Supabase", "Typescript"],
    prodUrl: "",
    githubUrl:
      "https://github.com/PriyanshuValiya/lesson-planning-application-v1",
    feats: [
      "Efficiently manages the entire college's faculty and exam data",
      "Upcoming exams and lesson planning management system",
      "Currently in live production and actively used by the college",
    ],
  },
  {
    title: "Google Notes",
    description: "Multiuser notes taker website",
    image: assets.google_notes,
    tech: ["EJS", "Express", "MongoDB", "Passport", "Bootstrap"],
    prodUrl:
      "https://google-notes-mrbxgsina-priyanshuvaliyas-projects.vercel.app",
    githubUrl: "https://github.com/PriyanshuValiya/Google-Notes",
    feats: [
      "Multiple users can create, edit, and share notes",
      "Support for formatted text, lists, and links",
      "Responsive design for seamless access on any device",
    ],
  },
  {
    title: "Youtube Clone",
    description: "AI based online website generator",
    image: assets.youtube,
    tech: ["Next.js", "Supabase", "Tailwind", "Gemini API"],
    prodUrl: "https://youtube-clone-swart-eight.vercel.app",
    githubUrl: "https://github.com/PriyanshuValiya/Youtube-Clone",
    feats: [
      "Showing real feeds from Youtube API",
      "Listing real comments from API",
      "Showing relavent videos in feed",
    ],
  },
  {
    title: "ShopCart",
    description: "E-Commerce Plateform",
    image: assets.shopcart,
    tech: ["React", "Material UI"],
    prodUrl: "https://priyanshuvaliya-shopcart.onrender.com",
    githubUrl: "https://github.com/PriyanshuValiya/ShopCart",
    feats: [
      "Category-wise product listing",
      "Add-to-cart functionality",
      "State management across all pages",
    ],
  },
  {
    title: "Weather App",
    description: "Open Source Contribution Project",
    image: assets.weather,
    tech: ["HTML", "CSS", "JavaScript", "Chart.js", "OpenWeather"],
    prodUrl: "https://clubgamma.github.io/Weather-Web-App-2024",
    githubUrl:
      "https://github.com/clubgamma/Weather-Web-App-2024",
    feats: [
      "Daily Weather, Air Quality, Gas Quality",
      "1-Week Forecast Graph",
      "World Global Warming Map",
    ],
  },
  {
    title: "ShopDeal",
    description: "Basic E-Commerce Website",
    image: assets.shopdeal,
    tech: ["HTML", "CSS"],
    prodUrl: "https://shop-deal.vercel.app",
    githubUrl:
      "https://github.com/PriyanshuValiya/ShopDeal",
    feats: [],
  },
  {
    title: "Pizza Hut",
    description: "Food Ordering Website",
    image: assets.figma,
    tech: ["Figma"],
    prodUrl:
      "https://www.figma.com/proto/M89FIqF8TtPFMIfi00ddMN/Pizza-Hut?node-id=3-7",
    githubUrl:
      "https://www.figma.com/proto/M89FIqF8TtPFMIfi00ddMN/Pizza-Hut?node-id=3-7",
    feats: [],
  },
];
