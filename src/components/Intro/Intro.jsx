import React from "react"; 
import styles from "./Intro.module.css";
import { DESCRIPTION } from "./../../index.js";
import { motion } from "framer-motion";
import { LinkedinPlain } from 'devicons-react';
import { CiMail } from "react-icons/ci";
import image from '/assets/intro/placeholder.png';


const animation = (delay) => ({
  hidden: {x: -200, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.75, delay: delay}
  }
})

export const Intro = () => {

  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
  });
  
  return (
    <section className = {styles.container}>
      <div className={styles.contentWrapper}>
        <div className = {styles.content}>
          <motion.h1 className = {styles.title} 
            variants={animation(0)}
            initial = "hidden"
            animate = "visible"
            >Ethan Chan</motion.h1>
          <motion.p className = {styles.major}
            variants={animation(0.5)}
            initial = "hidden"
            animate = "visible">Computer Science</motion.p>
          <motion.p className = {styles.description}
            variants={animation(1)}
            initial = "hidden"
            animate = "visible">{DESCRIPTION}</motion.p>
          <div className = {styles.socialMedia}>
            <motion.a className = {styles.mediaIcons} 
              href = "https://www.linkedin.com/in/ethanchan163"
              target="_blank"
              variants={animation(1.5)}
              initial = "hidden"
              animate = "visible"><LinkedinPlain color = "white" size = "64"/></motion.a>
            <motion.a className = {styles.mediaIcons} 
              href = "mailto:ethanchan163@gmail.com"
              target="_blank"
              variants={animation(1.5)}
              initial = "hidden"
              animate = "visible"><CiMail color = "white" size = "88"/></motion.a>
          </div>
        </div>
      {/*
      <img className = {styles.introImg} 
        src = {image}
        alt = "Picture of me"></img>
      */}
        </div>
    </section>
  )
}
