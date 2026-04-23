import { useState } from "react";
import IntroductionSection from "../../components/IntroductionSection";
import AboutMeSection from "../../components/AboutMeSection";
import KnowledgeSection from "../../components/KnowledgeSection";
import "./style.css";
import camillyInferior from "../../assets/camilly-inferior.png";

export default function Home() {
  return (
    <>
      <IntroductionSection />
      <AboutMeSection />
      <KnowledgeSection />
    </>
  );
}
