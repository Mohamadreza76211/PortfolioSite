import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const IndexSlider = () => {
  const props = {
    init: false,
    loop: false,
    spaceBetween: 0,
    effect: "fade",
    slidesPerView: 1,
    simulateTouch: false,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
      waitForTransition: false,
    },
    navigation: false,
    onSlideChange: (swiperCore) => {
      // const { activeIndex, snapIndex, previousIndex, realIndex } = swiperCore;
      var index = swiperCore.realIndex;
      var total = swiperCore.slides.length;
      const cursor = document.querySelectorAll(
        ".started-carousel .swiper-slide"
      );
      cursor.forEach((element, i) => {
        if ((index-1)>=i) {
          element.classList.add("swiper-clip-active");
        } else {
          element.classList.remove("swiper-clip-active");
        }
      });
      cursor.forEach((element, i) => {
        element.style.zIndex = total - i;
      });
      swiperCore.init();
    },
  };
  return (
    <Layout>
      <div className="section started" id="section-started">
        {/* background */}
        <div className="video-bg">
          <div className="video-bg-mask" />
          <div className="video-bg-texture" id="grained_container" />
          {/* slider */}
          <div className="started-carousel">
            <Swiper {...props} className="swiper-container">
              <SwiperSlide className="swiper-slide swiper-clip-active">
                <div
                  className="main-img"
                  style={{ backgroundImage: "url(images/started_image.jpg)" }}
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="main-img"
                  style={{
                    backgroundImage: "url(images/started_image2.jpg)",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="main-img"
                  style={{
                    backgroundImage: "url(images/started_image3.jpg)",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  className="main-img"
                  style={{
                    backgroundImage: "url(images/started_image4.jpg)",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* started content */}
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">
                Hello, I’m <strong>Alejandro Abeyta</strong>, UX/UI Designer and{" "}
                <br />
                Front-end Developer Based in San Francisco.
              </h1>
              <TypingAnimation extraClassName={"h-subtitle"} />
              <span className="typed-subtitle" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default IndexSlider;
