import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern - Dolby Laboratories",
    location: "Sunnyvale, CA",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Software Engineer Intern - Tesla",
    location: "Palo Alto, CA",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
  {
    title: "Software Engineer - Tesla",
    location: "Palo Alto, CA",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Cat Food Tracker",
    description:
      "I worked as a full-stack developer on Cat-Food-Logger, a user-friendly app enabling cat owners to track their cats' food preferences, logging food trials and providing analytics.",
    tags: ["Java", "Flutter", "MongoDB", "Bloc", "gRPC", "Springboot"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Duplicate Finder",
    description:
      "A recursive file duplicate finder for efficient management and analysis of duplicate files within specified or current directories.",
    tags: ["Python", "OOP"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Car Simulator",
    description:
      "An immersive car simulator leveraging Three.js, offering realistic 3D rendering and interactive controls in browser.",
    tags: ["Javascript", "Three.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
