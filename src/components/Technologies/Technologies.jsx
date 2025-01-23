import React from "react";
import styles from "./Technologies.module.css";
import { Tilt } from "react-tilt";
import { COriginal, CplusplusOriginal, PythonOriginal, ReactOriginal, 
         JavascriptOriginal, Html5Original, Css3Original, VscodeOriginal,
         PycharmOriginal, ClionOriginal, LinuxOriginal, DockerOriginal,
         GitOriginal } from 'devicons-react';
import { FaWindows, FaApple, FaGithub } from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { IoLogoTableau } from "react-icons/io5";

const defaultOptions = {
  reverse: true,
  max: 15
}

const technologies = {
  "Programming Languages I Know": [
    {Icon: COriginal},
    {Icon: CplusplusOriginal},
    {Icon: PythonOriginal},
    {Icon: ReactOriginal},
    {Icon: JavascriptOriginal},
    {Icon: Html5Original},
    {Icon: Css3Original}
  ],
  "Tools I Use": [
    {Icon: VscodeOriginal},
    {Icon: PycharmOriginal},
    {Icon: ClionOriginal},
    {Icon: FaWindows, color: "rgba(36, 173, 235)" },
    {Icon: FaApple, color: "white" },
    {Icon: LinuxOriginal},
    {Icon: DockerOriginal},
    {Icon: GitOriginal},
    {Icon: FaGithub, color: "white" },
    {Icon: PiMicrosoftOutlookLogoFill, color: "rgb(24, 117, 202)" },
    {Icon: IoLogoTableau, color: "white" }
  ]
};

const IconRow = ({icons}) => (
  <div className={styles.iconGroup}>
    {icons.map(({Icon, color}, index) => (
      <Tilt key={index} options={defaultOptions}>
        <div className={styles.iconBorder}>
          <Icon size="88" color={color} />
        </div>
      </Tilt>
    ))}
  </div>
);

export const Technologies = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Technologies</h2>
        <ul>
          {Object.entries(technologies).map(([category, icons]) => (
            <React.Fragment key={category}>
              <li className={styles.technologies}>
                {category}
              </li>
              <IconRow icons={icons} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
};