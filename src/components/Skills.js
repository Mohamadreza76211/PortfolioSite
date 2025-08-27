import { useEffect } from "react";
import { createSkillsDot, dotResize } from "../utils";

export const DesignSkills = () => {
  return (
    <div className="section skills" id="section-skills">
      <div className="content">
        <div className="title">
          <div className="title_inner">Front-End Development Skills</div>
        </div>
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">React JS & Redux</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }}>
                  <span className="percent">90%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Material UI Implementation</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Tailwind CSS</div>
              <div className="progress">
                <div className="percentage" style={{ width: "82%" }}>
                  <span className="percent">82%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Responsive & Cross-Device Design</div>
              <div className="progress">
                <div className="percentage" style={{ width: "95%" }}>
                  <span className="percent">95%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Clean Code & Best Practices</div>
              <div className="progress">
                <div className="percentage" style={{ width: "88%" }}>
                  <span className="percent">88%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Progressive Web Application</div>
              <div className="progress">
                <div className="percentage" style={{ width: "78%" }}>
                  <span className="percent">78%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const LanguagesSkills = () => {
  useEffect(() => {
    dotResize();
    setTimeout(createSkillsDot, 1000);
  }, []);

  return (
    <div className="section skills" id="section-skills-lang">
      <div className="content">
        <div className="title">
          <div className="title_inner">Language Skills</div>
        </div>
        <div className="skills percent content-box">
          <ul>
            <li>
              <div className="name">Persian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "100%" }}>
                  <span className="percent">100%</span>
                </div>
              </div>
            </li>
            <li>
              <div className="name">English</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }}>
                  <span className="percent">85%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CodingSkills = () => {
  return (
    <div className="section skills" id="section-skills-code">
      <div className="content">
        <div className="title">
          <div className="title_inner">Coding Skills</div>
        </div>
        <div className="skills circles content-box">
          <ul>
            <li>
              <div className="name">React JS / Redux</div>
              <div className="progress p90">
                <div className="percentage">
                  <span className="percent">90%</span>
                </div>
                <span>90%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">JavaScript / Next JS</div>
              <div className="progress p85">
                <div className="percentage">
                  <span className="percent">85%</span>
                </div>
                <span>85%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Tailwind CSS</div>
              <div className="progress p82">
                <div className="percentage">
                  <span className="percent">82%</span>
                </div>
                <span>82%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="name">Microsoft SQL Server</div>
              <div className="progress p70">
                <div className="percentage">
                  <span className="percent">70%</span>
                </div>
                <span>70%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const KnowledgeSkills = () => {
  return (
    <div className="section skills" id="section-skills-know">
      <div className="content">
        <div className="title">
          <div className="title_inner">Knowledge</div>
        </div>
        <div className="skills list content-box">
          <ul>
            <li>
              <div className="name">Git Version Control</div>
            </li>
            <li>
              <div className="name">RESTful API Integration</div>
            </li>
            <li>
              <div className="name">Clean Code Principles</div>
            </li>
            <li>
              <div className="name">Tailwind CSS Framework</div>
            </li>
            <li>
              <div className="name">Virtualization (Vsphere)</div>
            </li>
            <li>
              <div className="name">Networking (CCNA & CCNP)</div>
            </li>
            <li>
              <div className="name">Technical Documentation</div>
            </li>
            <li>
              <div className="name">Responsive Web Design</div>
            </li>
            <li>
              <div className="name">UX/UI Collaboration</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
