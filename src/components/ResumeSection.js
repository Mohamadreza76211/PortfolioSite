const ResumeSection = () => {
  return (
    <div className="section resume" id="section-history">
      <div className="content">
        <div className="cols">
          {/* Experience Column */}
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item content-box active">
                <div className="date">Jan 2018 – Present</div>
                <div className="name">Front-End Developer – ExirSoft</div>
                <div className="text">
                  Built reusable and scalable components using React.js and
                  Redux. Collaborated closely with UI/UX teams, integrated REST
                  APIs, ensured responsiveness, and applied clean architecture
                  principles.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Apr 2024 – Present</div>
                <div className="name">Front-End Developer – Freelancer</div>
                <div className="text">
                  Developed responsive web apps using React.js, Redux, and
                  Material UI. Built internal admin panels, chat systems, and
                  focused on clean code, Git version control, and performance
                  best practices.
                </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="col col-md">
            <div className="title">
              <div className="title_inner">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item content-box">
                <div className="date">Sep 2016 – Jul 2020</div>
                <div className="name">
                  B.Sc. in Computer Software Engineering – Islamic Azad
                  University
                </div>
                <div className="text">
                  Graduated with GPA 16.3/20 (3.4/4). Ranked 2nd among all
                  peers. Focused on programming, algorithms, and front-end
                  technologies.
                </div>
              </div>
              <div className="resume-item content-box">
                <div className="date">Certified</div>
                <div className="name"> English – Cambridge University</div>
                <div className="text">
                  Achieved Cisco CCNA certification and Cambridge Movers &
                  Flyers English certifications. Published article:
                  &quot;Exploring Zigbee Technology: Practical Applications and
                  Innovations.&quot;
                </div>
              </div>

              <div className="resume-item content-box">
                <div className="date">Issued Apr 2025 · Expires Apr 2030</div>
                <div className="name">
                  National Accreditation Authority for Translators and
                  Interpreters LTD
                </div>
                <div className="text">Credential ID 119728-985153-1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeSection;
