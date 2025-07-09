const Service = () => {
  return (
    <div className="section service" id="section-services">
      <div className="content">
        {/* title */}
        <div className="title">
          <div className="title_inner">Services</div>
        </div>
        {/* service items */}
        <div className="service-items">
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code" />
              </div>
              <div className="name">Web Development</div>
              <div className="text">
                Modern and mobile-ready website that will help you reach all of
                your marketing.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-music" />
              </div>
              <div className="name">Music Writing</div>
              <div className="text">
                Music copying, writing, creating, transcription, arranging and
                services.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-ad" />
              </div>
              <div className="name">Advetising</div>
              <div className="text">
                Advertising services include television, radio, print, mail, and
                web apps.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-gamepad" />
              </div>
              <div className="name">Game Development</div>
              <div className="text">
                Developing memorable and unique mobile android, ios and video
                games.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-camera" />
              </div>
              <div className="name">Photography</div>
              <div className="text">
                Our in-house photography services team made up of professional
                photographers.
              </div>
            </div>
          </div>
          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-mobile-alt" />
              </div>
              <div className="name">Android Application</div>
              <div className="text">
                Games, playing music, handle network transactions, interacting
                content etc.
              </div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Service;
