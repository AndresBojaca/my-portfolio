import HeroSection from "./ui/sections/hero-section/HeroSection";
import JobExperience from "./ui/sections/job-experience/JobExperience";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto px-12 px-4">
      <HeroSection />
      <JobExperience /> 
    </main>
  );
}
