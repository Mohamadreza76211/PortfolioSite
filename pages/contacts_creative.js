import ContactSection from "../src/components/ContactSection";
import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactsCreative = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Contact </span>`,
  ];
  return (
    <Layout>
      <CreativePageBanner pageName={"Contacts"} typingData={typingAnimation} />
      <ContactSection />
    </Layout>
  );
};
export default ContactsCreative;
