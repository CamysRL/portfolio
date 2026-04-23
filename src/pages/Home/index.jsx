import { useState } from "react";
import IntroductionSection from "../../components/IntroductionSection";
import AboutMeSection from "../../components/AboutMeSection";
import KnowledgeSection from "../../components/KnowledgeSection";
import ProjectSection from "../../components/ProjectSection";
import "./style.css";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <AboutMeSection />
      <KnowledgeSection />
      <ProjectSection />
    </>
  );
}
