import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from "./Education.module.css";
import { EDUCATION } from "../../index.js";

export const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(EDUCATION[0]);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.university}>
          <h2 className={styles.title}>My Education</h2>
          <div className={styles.selectorContainer}>
            {EDUCATION.map((education) => (
              <motion.div
                key={education.id}
                className={`${styles.selector} ${selectedEducation.id === education.id ? styles.active : ''}`}
                onClick={() => setSelectedEducation(education)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.selectorContent}>
                  <span className={styles.university}>{education.university}</span>
                  <span className={styles.selectorDegree}>{education.degree}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEducation.id}
            className={styles.details}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.content}>
              <p className={styles[selectedEducation.id]}>{selectedEducation.university}</p>
              <p className={styles.degree}>{selectedEducation.degree}</p>
              <p className={styles.coursework}>{selectedEducation.coursework}</p>
            </div>
            <div className={styles.dateLocation}>
              <p className={styles.date}>{selectedEducation.date}</p>
              <p className={styles.location}>{selectedEducation.location}</p>
            </div>
            <img
              className={styles.image}
              src={selectedEducation.image}
              alt={`${selectedEducation.university} logo`}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
