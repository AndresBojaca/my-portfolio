import HeroSection from "../../containers/Hero/Hero";
import JobExperience from "../../containers/JobExperience/JobExperience";
import ThemeSwitcher from '../../components/Theme/ThemeSwitcher';
import Projects from "@/containers/Projects/Projects";
import { Onest } from "next/font/google";
const font = Onest({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className={`${font.className} flex min-h-screen flex-col mx-auto`}>
      <ThemeSwitcher />
      <HeroSection />
      {/* <Projects /> */}
      <JobExperience />
    </main>
  );
}
