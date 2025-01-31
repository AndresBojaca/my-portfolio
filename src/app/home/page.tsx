import HeroSection from "@/containers/Hero/Hero";
import JobExperience from "@/containers/JobExperience/JobExperience";
import Projects from "@/containers/Projects/Projects";
import { Navbar } from "@/components/layout/navbar";
import { Onest } from "next/font/google";
import Footer from "@/components/layout/footer";
const font = Onest({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className={`${font.className} flex min-h-screen flex-col mx-auto`}>
      <Navbar />
      <HeroSection />
      <Projects />
      <JobExperience />
      <Footer />
    </main>
  );
}
