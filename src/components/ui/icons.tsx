import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaWordpress, FaJenkins, FaGitAlt } from "react-icons/fa";
import { SiLit, SiPolymerproject, SiJquery, SiMysql, SiSonarqube, SiTailwindcss, SiTypescript, SiDjango, SiMoleculer } from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";

export type IconType = {
  [key: string]: JSX.Element;
};

const iconMap: { [key: string]: JSX.Element } = {
  "React": <FaReact />,
  "React.js": <FaReact />,
  "React Native": <FaReact />,
  "NodeJS": <FaNodeJs />,
  "Node": <FaNodeJs />,
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "JavaScript": <FaJs />,
  "TypeScript": <SiTypescript />,
  "PHP": <FaPhp />,
  "MySQL": <SiMysql />,
  "Bootstrap": <FaBootstrap />,
  "Jquery": <SiJquery />,
  "jQuery": <SiJquery />,
  "WordPress": <FaWordpress />,
  "Jenkins": <FaJenkins />,
  "SonarQube": <SiSonarqube />,
  "Tailwind": <SiTailwindcss />,
  "Polymer.js": <SiPolymerproject />,
  "Lit-Element": <SiLit />,
  "CELLS (BBVA)": <SiMoleculer />,
  "Test e2e": <TbTestPipe />,
  "Twig": <FaPhp />,
  "Laravel": <FaPhp />,
  "Django": <SiDjango />,
  "Git": <FaGitAlt />,
};

export const getIconLogo = (key: string, className?: string): JSX.Element | null => {
  const IconComponent = iconMap[key];
  return IconComponent ? React.cloneElement(IconComponent, { className }) : null;
};