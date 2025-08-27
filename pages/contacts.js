import ContactSection from "../src/components/ContactSection";
import { ImagePageBanner } from "../src/components/PageBanner";
import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const Contacts = () => {
  const typingAnimation = [
    `<span class="typed-bread"> <a href="#">Home</a>  / Contact </span>`,
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={"Contacts"}
        typingData={typingAnimation}
        bannerImg={"images/Contact.jpg"}
      />
      <ContactSection />
    </Layout>
  );
};

export default Contacts;
