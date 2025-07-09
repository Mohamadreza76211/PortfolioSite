const SingleBlog = () => {
  return (
    <div className="section blog" id="next_section">
      <div className="content content-box">
        <div className="single-post-text">
          {/* portfolio content */}
          <div className="portfolio-info portfolio-cols">
            <div className="description-col">
              {/* title */}
              <div className="title">
                <div className="title_inner">Description</div>
              </div>
              {/* text */}
              <div className="single-post-text">
                <p>
                  Now there is more fashion. There is no so-called trends. Now
                  chase after anything not necessary — nor for fashionable color
                  nor the shape, nor for style. Think about the content that you
                  want to invest in a created object, and only then will form.
                  The thing is your spirit. A spirit unlike forms hard copy.
                </p>
                <p>
                  Here choose yourself like that, without any looking back, do
                  your personal, home, small fashion, and all will be well.
                </p>
                <p>
                  My job is simple and sophisticated, so it is possible to
                  describe and simple, and flowery language. I love the feel and
                  sophistication of its superiority. I like people with a keen
                  mind and at the same time easy to talk to. These qualities can
                  be combined perfectly natural. However, things like people
                  look miserable, if these properties are connected to them
                  artificially.
                </p>
                {/* gallery */}
                <div className="gallery-item">
                  <p>
                    <a href="images/work1.jpg">
                      <img src="images/work1.jpg" alt="" />
                    </a>
                  </p>
                  <p>
                    <a href="images/work2.jpg">
                      <img src="images/work2.jpg" alt="" />
                    </a>
                  </p>
                  <p>
                    <a href="images/work3.jpg">
                      <img src="images/work3.jpg" alt="" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="details-col">
              {/* title */}
              <div className="title">
                <div className="title_inner">Details</div>
              </div>
              {/* details */}
              <ul className="details-list">
                <li>
                  <strong>Categories:</strong> Gallery
                </li>
                <li>
                  <strong>Date:</strong> 10 July 2019
                </li>
                <li>
                  <strong>Client:</strong> Envato
                </li>
                <li>
                  <strong>Live Preview:</strong>{" "}
                  <a
                    href="https://google.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.envato.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default SingleBlog;
