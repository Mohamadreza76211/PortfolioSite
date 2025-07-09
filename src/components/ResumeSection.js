const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">2013 - Present</div>
                <div className="name">Art Director - Facebook Inc.</div>
                <div className="text">
                  Collaborate with creative and development teams on the
                  execution of ideas.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2011 - 2012</div>
                <div className="name">Front-End Developer - Google Inc.</div>
                <div className="text">
                  Monitored technical aspects of the front-end delivery for
                  projects.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2009 - 2010</div>
                <div className="name">Senior Developer - ABC Inc.</div>
                <div className="text">
                  Optimize your website and apps performance using latest
                  technology.
                </div>
              </div>
            </div>
          </div>
          <div className="col col-md">
            {/* title */}
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            {/* resume items */}
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">2006 - 2008</div>
                <div className="name">Art University - New York</div>
                <div className="text">
                  Bachelors Degree in Computer Science ABC Technical Institute,
                  Jefferson, Missouri.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2005 - 2006</div>
                <div className="name">Programming Course - Paris</div>
                <div className="text">
                  Coursework - Git, WordPress, Javascript, iOS, Android, CSS,
                  and JavaScript.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">2004 - 2005</div>
                <div className="name">Web Design Course - London</div>
                <div className="text">
                  Converted Photoshop layouts to web pages using HTML, CSS, and
                  JavaScript.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
