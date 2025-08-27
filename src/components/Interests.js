const Interests = () => {
  return (
    <div className="section service" id="section-interests">
      <div className="content">
        <div className="title">
          <div className="title_inner">Interests</div>
        </div>
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-futbol" />
              </div>
              <div className="name">Football</div>
              <div className="text">
                Enjoy playing football to stay active and foster teamwork,
                enhancing problem-solving skills through strategic gameplay.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-campground" />
              </div>
              <div className="name">Camping</div>
              <div className="text">
                Passionate about camping to connect with nature, promoting
                resilience and adaptability in dynamic environments.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-chess-knight" />
              </div>
              <div className="name">Chess</div>
              <div className="text">
                Enthusiastic about chess, which sharpens strategic thinking and
                attention to detail, skills I apply in coding.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-headphones" />
              </div>
              <div className="name">Music</div>
              <div className="text">
                Love exploring music to boost creativity and focus, often
                listening to inspire innovative solutions in development.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};

export default Interests;
