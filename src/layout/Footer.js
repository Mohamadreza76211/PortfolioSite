const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
        <p>E: najafi.mohamad2021@gmail.com</p>
        <p>T: +98 (921) 346 91 31</p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Mohamadreza76211"
          >
            <span className="icon fab fa-github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mohammadreza-haji-najafi/"
          >
            <span className="icon fab fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/Mohamadreza7621"
          >
            <span className="icon fab fa-telegram" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
