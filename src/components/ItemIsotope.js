import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";
const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".box-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "glitch-effect" : "");

  useEffect(() => {
    const circle = document.querySelectorAll(".circle");
    circle.forEach((e) => {
      e.addEventListener("mouseenter", (m) => {
        console.log(
          m.pageY,
          e.offsetParent.offsetParent.offsetParent.offsetParent.offsetLeft,
          e.offsetTop
        );
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
          // span.style.height = `${e.clientHeight}px`;
          // span.style.width = `${e.clientWidth}px`;
          // span.style.top = `${m.pageY - e.offsetTop - e.clientHeight / 2}px`;
          // span.style.left = `${m.pageX - e.offsetLeft - e.clientWidth / 2}px`;
        }
      });
      e.addEventListener("mouseleave", (m) => {
        const span = document.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
      {/* portfolio filter */}
      <div className="filter-menu content-box">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              All
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-video")}`}
              onClick={handleFilterKeyChange("f-video")}
              data-text="Video"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-video" />
              Video
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-music")}`}
              onClick={handleFilterKeyChange("f-music")}
              data-text="Music"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-music" />
              Music
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-links")}`}
              onClick={handleFilterKeyChange("f-links")}
              data-text="Links"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-links" />
              Links
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-image")}`}
              onClick={handleFilterKeyChange("f-image")}
              data-text="Image"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-image" />
              Image
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-gallery")}`}
              onClick={handleFilterKeyChange("f-gallery")}
              data-text="Gallery"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-gallery" />
              Gallery
            </label>
          </div>
          <div className="btn-group">
            <label
              className={`c-pointer ${activeBtn("f-content")}`}
              onClick={handleFilterKeyChange("f-content")}
              data-text="Content"
            >
              <input type="radio" name="fl_radio" defaultValue=".f-content" />
              Content
            </label>
          </div>
        </div>
      </div>
      {/* portfolio items */}
      <div className="box-items portfolio-items">
        <div className="box-item f-gallery">
          {" "}
          {/* add class "animate-to-page" if need animated transition to page and delete target="_blank" rel="noreferrer" */}
          <div className="image">
            <a href="#gallery-1" className="has-popup-gallery hover-animated">
              <img src="images/work1.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">Shot in Iceland</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-1" className="mfp-hide">
              <a href="images/work1.jpg" />
              <a href="images/work2.jpg" />
              <a href="images/work3.jpg" />
              <a href="images/work4.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-links">
          <div className="image">
            <a
              href="https://google.com/"
              className="has-popup-link hover-animated"
              target="_blank"
              rel="noreferrer"
            >
              <img src="images/work3.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-link" />
                    <span className="desc">
                      <span className="category">Links</span>
                      <span className="name">Nike Red</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-video">
          <div className="image">
            <a
              href="https://www.youtube.com/embed/S4L8T2kFFck"
              className="has-popup-video hover-animated"
            >
              <img src="images/work2.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-video" />
                    <span className="desc">
                      <span className="category">Video</span>
                      <span className="name">Fertility of Some Plants</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-image">
          <div className="image">
            <a
              href="images/work4.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work4.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Image</span>
                      <span className="name">Inspiration in Cap Haitian</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-image">
          <div className="image">
            <a
              href="images/work7.jpg"
              className="has-popup-image hover-animated"
            >
              <img src="images/work7.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-image" />
                    <span className="desc">
                      <span className="category">Image</span>
                      <span className="name">Water and Shore</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-music">
          <div className="image">
            <a
              href="https://w.soundcloud.com/player/?visual=true&url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F221650664&show_artwork=true"
              className="has-popup-music hover-animated"
            >
              <img src="images/work6.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-music" />
                    <span className="desc">
                      <span className="category">Music</span>
                      <span className="name">Dark Bike</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div className="box-item f-gallery">
          <div className="image">
            <a href="#gallery-2" className="has-popup-gallery hover-animated">
              <img src="images/work5.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-images" />
                    <span className="desc">
                      <span className="category">Gallery</span>
                      <span className="name">Undulating Space</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
            <div id="gallery-2" className="mfp-hide">
              <a href="images/work5.jpg" />
              <a href="images/work1.jpg" />
              <a href="images/work2.jpg" />
              <a href="images/work3.jpg" />
            </div>
          </div>
        </div>
        <div className="box-item f-content">
          <div className="image">
            <a href="#popup-1" className="has-popup-media hover-animated">
              <img src="images/work8.jpg" className="wp-post-image" alt="" />
              <span className="info circle">
                <span className="centrize full-width">
                  <span className="vertical-center">
                    <span className="icon fas fa-plus" />
                    <span className="desc">
                      <span className="category">Content</span>
                      <span className="name">Curved Ceiling Ribs</span>
                    </span>
                  </span>
                </span>
              </span>
            </a>
          </div>
          <div id="popup-1" className="popup-box mfp-fade mfp-hide">
            <div className="content">
              <div
                className="image"
                style={{ backgroundImage: "url(images/work8.jpg)" }}
              />
              <div className="desc single-post-text">
                <div className="category">Content</div>
                <h4>Hand holding pyramid painting</h4>
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <ul>
                  <li>
                    Now there is more fashion. There is no so-called trends.
                  </li>
                  <li>
                    Now chase after anything not necessary — nor for fashionable
                    color nor the shape, nor for style.
                  </li>
                  <li>
                    Think about the content that you want to invest in a created
                    object, and only then will form.
                  </li>
                  <li>
                    The thing is your spirit. A spirit unlike forms hard copy.
                  </li>
                </ul>
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <Link href="/works_single_1">
                  <a className="btn hover-animated">
                    <span className="circle" />
                    <span className="lnk">View Project</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
