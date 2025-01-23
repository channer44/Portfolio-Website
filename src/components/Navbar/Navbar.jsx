import React, { useState } from "react"; 
import styles from "./Navbar.module.css";
import navButtonClosed from '/assets/nav/navButtonClosed.png';
import navButtonOpen from '/assets/nav/navButtonOpen.png';

export const Navbar = () => { 

  const [menuOpen, setMenuOpen] = useState(false);
  window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
  });

  return ( 
    <nav className = {styles.navbar}>
     <a className = {styles.title} 
       href="/">EC</a>
      <div className = {styles.menu}>
      <img className = {styles.navButton} 
        src = {menuOpen ? navButtonClosed : navButtonOpen } 
        alt = "Navbar Button" 
        onClick = {() => setMenuOpen(!menuOpen)}></img>
        <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
          onClick={(event) => {
            event.preventDefault();
            const target = event.target;
            const id = target.getAttribute("href")?.replace("#", "");
            const element = document.getElementById(id);
        
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
        
              setTimeout(() => {
                const offset = 70;
                const elementTop = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                  top: elementTop - offset,
                  behavior: "smooth",
                });
              }, 100);
            }
        
            setMenuOpen(false);
          }}>
          <li>
            <a href = "#education">Education</a>
          </li>
          <li>
            <a href = "#technologies">Technologies</a>
          </li>
          <li>
            <a href = "#projects">Projects</a>
          </li>
          <li>
            <a href = "#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav> 
  )
}
