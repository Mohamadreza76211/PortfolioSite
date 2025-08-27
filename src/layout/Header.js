import Link from "next/link";
import { Fragment, useState } from "react";

const Menu = () => (
  <Fragment>
    <div style={{ width: "200px" }} className="logo hover-masks-logo">
      <a href="#">
        <span className="mask-lnk">
          Mohammadreza <strong>Haji Najafi</strong>
        </span>
        <span className="mask-lnk mask-lnk-hover">
          Download <strong>CV</strong>
        </span>
      </a>
    </div>
    {/* top menu */}
    <div className="top-menu hover-masks">
      <div className="top-menu-nav">
        <div className="menu-topmenu-container">
          <ul className="menu">
            <li className="menu-item menu-item-has-children">
              <Link href="/">
                <a>
                  <span className="mask-lnk">Home</span>
                  <span className="mask-lnk mask-lnk-hover">Home</span>
                </a>
              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/resume">
                <a>
                  <span className="mask-lnk">Resume</span>
                  <span className="mask-lnk mask-lnk-hover">Resume</span>
                </a>
              </Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <Link href="/works">
                <a>
                  <span className="mask-lnk">Works</span>
                  <span className="mask-lnk mask-lnk-hover">Works</span>
                </a>
              </Link>
            </li>
            {/* <li className="menu-item menu-item-has-children">
              <Link href="/blog">
                <a>
                  <span className="mask-lnk">Blog</span>
                  <span className="mask-lnk mask-lnk-hover">Blog</span>
                </a>
              </Link>
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link href="/blog">
                    <a>
                      <span className="mask-lnk">Blog Posts</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Blog Posts
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link href="/blog_post">
                    <a>
                      <span className="mask-lnk">Single Post</span>
                      <span className="mask-lnk mask-lnk-hover">
                        Single Post
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <Link href="/contacts">
                <a>
                  <span className="mask-lnk">Contact</span>
                  <span className="mask-lnk mask-lnk-hover">Contact</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Fragment>
);

const Header = () => {
  return (
    <Fragment>
      <MobileHeader />
      <DeskTopHeader />
    </Fragment>
  );
};
export default Header;

const DeskTopHeader = () => (
  <header className={`header desktopHeader`}>
    <div className="head-top">
      <Menu />
    </div>
  </header>
);

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className={`header mobileHeader ${toggle ? "active" : ""}`}>
      <div className="head-top">
        {/* menu button */}
        <a href="#" className="menu-btn" onClick={() => setToggle(!toggle)}>
          <span />
        </a>
        {/* logo */}
        <Menu />
      </div>
    </header>
  );
};
