import About from "../src/components/About";
import Clients from "../src/components/Clients";
import CustomText from "../src/components/CustomText";
import Interests from "../src/components/Interests";
import { ImagePageBanner } from "../src/components/PageBanner";
import Pricing from "../src/components/Pricing";
import ResumeSection from "../src/components/ResumeSection";
import Service from "../src/components/Service";
import {
  CodingSkills,
  DesignSkills,
  KnowledgeSkills,
  LanguagesSkills,
} from "../src/components/Skills";
import Team from "../src/components/Team";
import Testimonials from "../src/components/Testimonials";
import Layout from "../src/layout/Layout";
const ResumeImage = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Resume </span>`,
  ];
  return (
    <Layout>
      {/* Section Started */}
      <ImagePageBanner pageName={"Resume"} typingData={typingAnimation} />
      {/* Section About */}
      <About />
      {/* Section Service */}
      <Service />
      {/* Section Pricing */}
      <Pricing />
      {/* Section Resume */}
      <ResumeSection />
      {/* Section Design Skills */}
      <DesignSkills />
      {/* Section Languages Skills */}
      <LanguagesSkills />
      {/* Section Coding Skills */}
      <CodingSkills />
      {/* Section Knowledge Skills */}
      <KnowledgeSkills />
      {/* Section Interests */}
      <Interests />
      {/* Section Team */}
      <Team />
      {/* Section Testimonials */}
      <Testimonials />
      {/* Section Clients */}
      <Clients />
      {/* Section Custom Text */}
      <CustomText />
    </Layout>
  );
};
export default ResumeImage;
