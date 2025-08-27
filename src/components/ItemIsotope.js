import Isotope from "isotope-layout";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { parallax } from "../utils";

const ItemIsotope = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("box-item");

  useEffect(() => {
    parallax();
  }, []);

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
      e.addEventListener("mouseenter", () => {
        if (!e.getElementsByClassName("ink")[0]) {
          const span = document.createElement("span");
          span.classList.add("ink");
          e.appendChild(span);
          span.classList.add("ink-animate");
        }
      });
      e.addEventListener("mouseleave", () => {
        const span = e.querySelector(".ink");
        if (span) {
          span.classList.remove("ink-animate");
        }
      });
    });
  }, []);

  return (
    <Fragment>
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
      <div className="box-items portfolio-items">
        <div className="box-item f-links relative" style={{ marginTop: "0px" }}>
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://hamsoo.bvt.ir/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/Hamsoo.png"
                  alt="Hamsoo"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Gallery
                        </div>
                        <div className="name text-lg font-bold">Hamsoo</div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="box-item f-links relative"
          style={{ marginTop: "300px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://shikhub.com/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/Shikhub.png"
                  alt="Homa"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Image
                        </div>
                        <div className="name text-lg font-bold">Shikhub</div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="box-item f-links relative"
          style={{ marginTop: "300px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://polarisapp.ir/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/Polaris.svg"
                  alt="Homa"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Image
                        </div>
                        <div className="name text-lg font-bold">
                          Polaris App
                        </div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="box-item f-links relative"
          style={{ marginTop: "100px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://desna.ir/?lang=en">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/Desna.png"
                  alt="Desna"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Links
                        </div>
                        <div className="name text-lg font-bold">Desna</div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="box-item f-links relative"
          style={{ marginTop: "200px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://ghajarifood.com/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/Ghajari.png"
                  alt="Ghajari"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Video
                        </div>
                        <div className="name text-lg font-bold">
                          Ghajari restaurant
                        </div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        {/* <div
          className="box-item f-links relative"
          style={{ marginTop: "300px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://royaljeans.ir/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/RoyalJeans.png"
                  alt="Homa"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Image
                        </div>
                        <div className="name text-lg font-bold">
                          Royal Jeans
                        </div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div> */}
        <div
          className="box-item f-links relative"
          style={{ marginTop: "300px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="http://ross.desna.ir/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/ross.svg"
                  alt="Homa"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Image
                        </div>
                        <div className="name text-lg font-bold">Ross</div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="box-item f-links relative"
          style={{ marginTop: "300px" }}
        >
          <div className="image cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Link href="https://piazapp.com/">
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/images/PiazLogo.svg"
                  alt="Homa"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <span className="info circle absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="centrize w-full">
                    <span className="vertical-center text-white text-center">
                      <i className="icon fas fa-link text-2xl mb-2" />
                      <div className="desc">
                        <div className="category text-sm font-semibold">
                          Image
                        </div>
                        <div className="name text-lg font-bold">Piaz App</div>
                      </div>
                    </span>
                  </span>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ItemIsotope;
