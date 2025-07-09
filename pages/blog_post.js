import { ImagePageBanner } from "../src/components/PageBanner";
import { Fragment, useContext } from "react";
import Layout from "../src/layout/Layout";
import Link from "next/link";
import dynamic from "next/dynamic";

const BlogPost = () => {
  const typingAnimation = [
    "<span class='typed-bread'><a href='#'>Design</a> / 20 July 2020</span>",
  ];
  return (
    <Layout>
      <ImagePageBanner
        pageName={"Two Before Arrow Not Relied"}
        typingData={typingAnimation}
        bannerImg="images/blog/blog_4.jpg"
      />

      <div className="section blog">
        <div className="content">

          <div className="post">
            <div className="content-box">

              <div className="single-post-text">
                <p>So striking at of to welcomed resolved. Northward by described up household therefore attention. Excellence decisively nay man yet impression for contrasted remarkably.</p>
                <p>Forfeited you engrossed but gay sometimes explained. Another as studied it to evident. Merry sense given he be arise. Conduct at an replied removal an amongst. Remaining determine few her two cordially admitting old.</p>
                <blockquote>
                  <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque suscipit.</p>
                </blockquote>
                <p>Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing <a href="#">link</a> sufficient everything men him admiration unpleasing .</p>
                <ul>
                  <li>Greatest properly off ham exercise all.</li>
                  <li>Unsatiable invitation its possession nor off.</li>
                  <li>All difficulty estimating unreserved increasing the solicitude.</li>
                </ul>
                <p>Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of.</p>
              </div>

              <div className="post-text-bottom">
                <div className="social-share">
                  <span>Share:</span>
                  <a className="share-btn share-btn-facebook share-btn-1" title="Share on Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a className="share-btn share-btn-twitter share-btn-2" title="Share on Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="share-btn share-btn-linkedin share-btn-3" title="Share on Linkedin">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a className="share-btn share-btn-reddit share-btn-4" title="Share on Reddit">
                    <i className="fab fa-reddit"></i>
                  </a>
                  <a className="share-btn share-btn-pinterest share-btn-5" title="Share on Pinterest">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>
                <div className="cat-links">
                  <span>Posted in </span>
                  <a href="/categories/design">Design</a>
                  <span className="byline"> / by <span className="author">Ryan Adlard</span></span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <a href="/tags/code" rel="tag">code</a>
                </div>
              </div>

            </div>
          </div>

          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <a href="#" title="Design in Mobile Application"><span className="post-nav-next post-nav-text">Prev</span></a>
              </div>
              <div className="nav-next">
                <a href="#" title="By spite about do of do allow blush"><span className="post-nav-prev post-nav-text">Next</span></a>
              </div>
            </div>
          </nav>

          <div className="clear"></div>
        </div>
      </div>

    </Layout>
  );
};
export default BlogPost;
