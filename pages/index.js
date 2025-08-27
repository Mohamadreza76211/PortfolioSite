import Layout from "../src/layout/Layout";
import TypingAnimation from "../src/components/TypingAnimation";
import dynamic from "next/dynamic";

// لود ClientIndex به صورت client-only (بدون SSR)
const ClientIndex = dynamic(() => import("../src/components/ClientIndex"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <div className="section started personal" id="section-started">
        {/* لود popup و منطق PWA */}
        <ClientIndex />
        {/* محتوای استاتیک */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
        </div>
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <div
                className="logo"
                style={{ backgroundImage: "url(images/MyPic.jpg)" }}
              />
              <h1 className="h-title">
                Hello, I’m <strong>Mohammadreza Haji Najafi</strong>,
                <br />
                Front-end Developer.
              </h1>
              <TypingAnimation extraClassName={"typed-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
