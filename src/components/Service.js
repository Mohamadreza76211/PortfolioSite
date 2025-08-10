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
                Modern, responsive websites with React.js, optimized for
                performance and usability.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-bolt" />
              </div>
              <div className="name">Progressive Web App (PWA)</div>
              <div className="text">
                Building installable, offline-ready web apps with PWA features
                for enhanced UX.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-layer-group" />
              </div>
              <div className="name">Next.js Development</div>
              <div className="text">
                Creating SEO-friendly, SSR/SSG web apps using Next.js and modern
                JavaScript stack.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-tools" />
              </div>
              <div className="name">UI Component Design</div>
              <div className="text">
                Crafting clean, reusable UI components with Material UI and
                Tailwind CSS.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-shield-alt" />
              </div>
              <div className="name">Clean Code & Optimization</div>
              <div className="text">
                Writing maintainable, efficient, and scalable code with modern
                best practices.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-database" />
              </div>
              <div className="name">Admin Panel Development</div>
              <div className="text">
                Building custom admin dashboards with Material UI, focused on
                functionality and usability.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-comments" />
              </div>
              <div className="name">Chat App Development</div>
              <div className="text">
                Creating secure and scalable chat systems with React and modern
                async communication techniques.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-sitemap" />
              </div>
              <div className="name">Design Patterns & Architecture</div>
              <div className="text">
                Applying clean architecture and proven design patterns to
                improve software maintainability.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-book" />
              </div>
              <div className="name">Technical Documentation</div>
              <div className="text">
                Writing detailed, maintainable technical docs for projects and
                development processes.
              </div>
            </div>
          </div>

          <div className="service-col">
            <div className="service-item content-box">
              <div className="icon">
                <span className="fas fa-code-branch" />
              </div>
              <div className="name">Version Control with Git</div>
              <div className="text">
                Effective use of Git for version control, team collaboration,
                and CI/CD integration.
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
