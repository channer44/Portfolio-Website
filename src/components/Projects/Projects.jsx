import React from "react";
import styles from "./Projects.module.css";
import { PROJECTS } from "../../index.js";

const ProjectCard = ({ title, description, technologies, image }) => (
  <div className={styles.projectCard}>
    <div className={styles.imageContainer}>
      {image ? (
        <img src={image} 
          alt={title} 
          className={styles.projectImage}
        />
      ) : (
        <div className={styles.imageGradient}/>
      )}
    </div>
    <div className={styles.projectInfo}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <div className={styles.techStack}>
        {technologies.map((tech) => (
          <span key={tech} className={styles.techStyle}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
