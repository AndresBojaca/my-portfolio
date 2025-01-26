import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaBootstrap, FaWordpress, FaJenkins, FaGitAlt } from "react-icons/fa";
import { SiLit, SiPolymerproject, SiJquery, SiMysql, SiSonarqube, SiTailwindcss, SiTypescript, SiDjango, SiMoleculer, SiDart, SiFlutter } from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";

export type IconType = {
  [key: string]: JSX.Element;
};

const iconMap: { [key: string]: JSX.Element } = {
  "react": <FaReact />,
  "react.js": <FaReact />,
  "react native": <FaReact />,
  "nodejs": <FaNodeJs />,
  "node": <FaNodeJs />,
  "html": <FaHtml5 />,
  "css": <FaCss3Alt />,
  "javascript": <FaJs />,
  "typescript": <SiTypescript />,
  "php": <FaPhp />,
  "mysql": <SiMysql />,
  "bootstrap": <FaBootstrap />,
  "jquery": <SiJquery />,
  "wordpress": <FaWordpress />,
  "jenkins": <FaJenkins />,
  "sonarqube": <SiSonarqube />,
  "tailwind": <SiTailwindcss />,
  "polymer.js": <SiPolymerproject />,
  "lit-element": <SiLit />,
  "cells (bbva)": <SiMoleculer />,
  "test e2e": <TbTestPipe />,
  "twig": <FaPhp />,
  "laravel": <FaPhp />,
  "django": <SiDjango />,
  "git": <FaGitAlt />,
  "dart": <SiDart />,
  "flutter": <SiFlutter />
};

export const getIconLogo = (key: string, className?: string): JSX.Element | null => {
  const IconComponent = iconMap[key];
  return IconComponent ? React.cloneElement(IconComponent, { className }) : null;
};