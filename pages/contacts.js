import ContactSection from "../src/components/ContactSection";
import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const Contacts = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Contact </span>`,
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"Contact"} typingData={typingAnimation} />
      <ContactSection />
    </Layout>
  );
};
export default Contacts;
