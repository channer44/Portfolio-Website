import React, { useState } from 'react';
import styles from './App.module.css';
import { motion } from "framer-motion";
import { Navbar } from "./components/Navbar/Navbar"; 
import { Intro } from "./components/Intro/Intro";
import { Education } from "./components/Education/Education";
import { Technologies } from "./components/Technologies/Technologies";
import { Projects } from "./components/Projects/Projects";
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";

function App() {

  const [isLightMode, setIsLightMode] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <div className={`${styles.app} ${isLightMode ? styles.light : ''}`}>
      <div className={`${styles.background} ${isLightMode ? styles.light : ''}`}></div>
      <Navbar />
      <button onClick={toggleLightMode} className={styles.toggleButton}>
        {isLightMode ? <FiMoon size = "32" /> : <MdOutlineWbSunny size = "32" />}
      </button>
      <Intro />
      <div id="education">
        <Education />
      </div>
      <div id="technologies">
        <Technologies />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}

export default App;
