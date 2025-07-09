import ContactSection from "../src/components/ContactSection";
import { ImagePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";
const ContactsImg = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Contact </span>`,
  ];
  return (
    <Layout>
      <ImagePageBanner pageName={"Contacts"} typingData={typingAnimation} />
      <ContactSection />
    </Layout>
  );
};
export default ContactsImg;
