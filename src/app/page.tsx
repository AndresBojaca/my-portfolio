import HeroSection from "./components/hero-section/HeroSection";
import JobExperience from "./components/job-experience/JobExperience";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-auto px-12 px-4">
      <HeroSection />
      <JobExperience /> 
    </main>
  );
}
