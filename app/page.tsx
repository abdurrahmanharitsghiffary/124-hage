import About from "@/components/about";
import Contacts from "@/components/contacts/contacts";
import Expriences from "@/components/expriences";
import HeroSection from "@/components/hero-section";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { Box } from "@mantine/core";

export default function HomePage() {
  return (
    <Box className="w-full">
      <HeroSection />
      <Box
        p="md"
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <About />
        <Expriences />
        <Skills />
        <Projects />
        <Contacts />
      </Box>
    </Box>
  );
}
