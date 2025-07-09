import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimationText = ({ typingData, extraClass }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const typed = new Typed(el.current, {
        strings: typingData
          ? typingData
          : [
              "I code cool <strong>websites</strong>",
              "I develop <strong>mobile apps</strong>",
              "I love <strong>wordpress</strong>",
            ], // Strings to display
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        smartBackspace: true,
        loop: false,
        showCursor: false,
      });

      // Destropying
      return () => {
        typed.destroy();
      };
    }, 2000);
  }, []);
  return (
    <div className="h-subtitles ready">
      <span className={extraClass} ref={el}></span>
    </div>
  );
};

const BannerContent = ({ pageName, pageTitle, typingData, extraClass }) => {
  return (
    <Fragment>
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">{pageTitle ? pageTitle : pageName}</h1>
            <AnimationText typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      {/* mosue button */}
      <a href="#next_section" className="mouse_btn">
        <span className="icon fas fa-chevron-down" />
      </a>
    </Fragment>
  );
};

export const DefaultPageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
}) => (
  <div className="section started section-title" id="section-started">
    {/* background */}
    <div className="video-bg">
      <div className="video-bg-mask" />
      <div className="video-bg-texture" id="grained_container" />
    </div>
    {/* started content */}
    <BannerContent
      typingData={typingData}
      pageName={pageName}
      pageTitle={pageTitle}
    />
  </div>
);
export const ImagePageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
  bannerImg,
}) => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);

  return (
    <div className="section started section-title" id="section-started">
      {/* background */}
      <div
        className="video-bg jarallax"
        style={{
          backgroundImage: `url(${
            bannerImg ? bannerImg : "images/resume_bg.jpg"
          })`,
        }}
      >
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}

      <BannerContent
        typingData={typingData}
        pageName={pageName}
        pageTitle={pageTitle}
        extraClass={extraClass}
      />
    </div>
  );
};

export const CreativePageBanner = ({
  pageName,
  pageTitle,
  typingData,
  extraClass,
}) => {
  return (
    <div className="section started layout-creative" id="section-started">
      {/* background */}
      <div className="video-bg">
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}
      <BannerContent
        typingData={typingData}
        pageName={pageName}
        pageTitle={pageTitle}
        extraClass={extraClass}
      />
    </div>
  );
};

export const MapBanner = ({ typingData, extraClass }) => {
  return (
    <div className="section started section-title" id="section-started">
      {/* background */}
      <div className="video-bg">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d136834.1519573059!2d-74.0154445224086!3d40.7260256534837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639991650837!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%", height: "100%" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
        <div className="video-bg-mask" />
        <div className="video-bg-texture" id="grained_container" />
      </div>
      {/* started content */}
      <div className="centrize full-width">
        <div className="vertical-center">
          <div className="started-content">
            <h1 className="h-title">Contacts</h1>
            <AnimationText typingData={typingData} extraClass={extraClass} />
          </div>
        </div>
      </div>
      {/* mosue button */}
      <a href="#next_section" className="mouse_btn">
        <span className="icon fas fa-chevron-down" />
      </a>
    </div>
  );
};
