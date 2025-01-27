import UF from '/assets/education/UF.png';
import UCF from '/assets/education/UCF.png';
import librarymanager from '/assets/projects/librarymanager.jpg';
import sudoku from '/assets/projects/sudoku.jpg';
import familytree from '/assets/projects/familytree.jpg';
import portfolio from '/assets/projects/portfolio.jpg';

export const DESCRIPTION = "I am a fourth-year student at the University of Florida. Currently \
immersed in the dynamic world of full-stack programming, I am open to new opportunities to expand my \
knowledge. As I am approaching the end of my university journey, I look forward to exploring internship \
opportunities and contributing to real-world projects. Reach out if you would like to learn more!"

export const EDUCATION = [
  {
    id: "UF",
    university: "University of Florida",
    degree: "Bachelor of Science in Computer Science",
    coursework: "Relevant Coursework: Programming Fundamentals 1 (Python), Programming Fundamentals 2 (C++), \
    Introduction to Computer Organization (ARM), Data Structures and Algorithms (C++), Internet Network Technologies (JavaScript), \
    Introduction to Software Engineering (Javascript, HTML, CSS)",
    date: "January 2023 - December 2025",
    location: "Gainesville, FL",
    image: UF
  },
  {
    id: "UCF",
    university: "University of Central Florida",
    degree: "Associate of Art",
    coursework: "Relevant Coursework: Engineering Concepts and Methods, Engineering Analysis and Computation (C)",
    date: "August 2021 - December 2022",
    location: "Orlando, FL",
    image: UCF
  }
]

export const PROJECTS = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects, skills, and contact details. Features dynamic animations, modular components, \
    and a responsive design optimized for all devices.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    image: portfolio
  },
  {
    title: "Library Manager",
    description: "A library management system handling inventory and checkout with seamless frontend-backend communication and a dynamic database of over 1,000 items.",
    technologies: ["JavaScript", "HTML", "CSS", "Python"],
    image: librarymanager
  },
  {
    title: "Family Tree",
    description: "A program for managing family trees using a balanced search tree. Supports adding/removing members and features versatile traversal algorithms.",
    technologies: ["C++"],
    image: familytree
  },
  {
    title: "Sudoku",
    description: "A Sudoku app with dynamic puzzle generation, difficulty levels, and robust solving algorithms, showcasing advanced backend development.",
    technologies: ["Python"],
    image: sudoku
  }
];

