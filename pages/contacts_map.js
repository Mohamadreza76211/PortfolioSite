import ContactSection from "../src/components/ContactSection";
import { MapBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactsMap = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Contact </span>`,
  ];
  return (
    <Layout>
      <MapBanner pageName={"Contact"} typingData={typingAnimation} />
      <ContactSection />
    </Layout>
  );
};
export default ContactsMap;
