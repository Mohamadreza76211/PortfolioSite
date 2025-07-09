import { DefaultPageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const Works = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Home</a> / Works</span>",
  ];
  return (
    <Layout>
      <DefaultPageBanner pageName={"works"} typingData={typingAnimation} />
      <div className="section works" id="next_section">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default Works;
