import HeroSection from "./ui/sections/hero-section/HeroSection";
import JobExperience from "./ui/sections/job-experience/JobExperience";
import ThemeSwitcher from '../components/ThemeSwitcher';
import { Onest } from "next/font/google";
const font = Onest({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className={`${font.className} flex min-h-screen flex-col mx-auto`}>
      <ThemeSwitcher />
      <HeroSection />
      <JobExperience />
    </main>
  );
}
