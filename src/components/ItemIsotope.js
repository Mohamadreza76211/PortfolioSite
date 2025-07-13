import Isotope from "isotope-layout";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";

const items = [
  {
    href: "/projects/hamsoo",
    src: "/images/Hamsoo.png",
    alt: "Hamsoo",
    category: "Gallery",
    name: "Hamsoo",
    icon: "fas fa-images",
    className: "f-gallery",
  },
  {
    href: "/projects/desna",
    src: "/images/Desna.png",
    alt: "Desna",
    category: "Links",
    name: "Desna",
    icon: "fas fa-link",
    className: "f-links",
  },
  {
    href: "/projects/ghajari",
    src: "/images/Ghajari.png",
    alt: "Ghajari",
    category: "Video",
    name: "Ghajari restaurant",
    icon: "fas fa-video",
    className: "f-video",
  },
  {
    href: "/projects/homa",
    src: "/images/Homa.png",
    alt: "Homa",
    category: "Image",
    name: "Homa Agency",
    icon: "fas fa-image",
    className: "f-image",
  },
];

const ItemIsotope = () => {
  useEffect(() => {
    parallax();
  }, []);

  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".box-item",
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
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
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
      {/* Filter menu */}
      <div className="filter-menu content-box mb-8">
        <div className="filters">
          <div className="btn-group">
            <label
              data-text="All"
              className={`c-pointer ${activeBtn("box-item")}`}
              onClick={handleFilterKeyChange("box-item")}
            >
              <input type="radio" name="fl_radio" defaultValue=".box-item" />
              Some Projects
            </label>
          </div>
        </div>
      </div>

      {/* Portfolio items */}
      <div className="box-items portfolio-items">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`box-item ${item.className} relative`}
            style={{ marginTop: `${idx * 100}px` }}
          >
            <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <Link href={item.href}>
                <a>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                  <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <span className="centrize w-full">
                      <span className="vertical-center text-white text-center">
                        <i className={`icon ${item.icon} text-2xl mb-2`} />
                        <div className="desc">
                          <div className="category text-sm font-semibold">
                            {item.category}
                          </div>
                          <div className="name text-lg font-bold">
                            {item.name}
                          </div>
                        </div>
                      </span>
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ItemIsotope;
