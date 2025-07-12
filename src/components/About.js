/* eslint-disable @next/next/no-img-element */
const About = () => {
  const calculateAge = () => {
    const birthDate = new Date(1997, 8, 27);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };
  return (
    <div className="section about" id="next_section">
      <div className="content content-box">
        {/* image */}
        <div className="image">
          <img src="images/MyPic.jpg" alt="" />
        </div>
        {/* desc */}
        <div className="desc">
          <p>
            With over seven years of programming experience, I&#39;m a
            passionate and dedicated team player who thrives on innovation,
            motivation, and continuous growth. My mission is to streamline
            development processes, achieve outstanding results, and infuse the
            workspace with energy and dynamism. Upholding top-notch quality and
            professionalism is my mantra across all project fronts.
          </p>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age:</strong> {calculateAge()}
              </li>
              <li>
                <strong>Residence:</strong> IRAN
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
              <li>
                <strong>Address:</strong> Tehran, Iran
              </li>
              <li>
                <strong>Phone:</strong> +98 921 346 91 31
              </li>
              <li>
                <strong>E-mail:</strong> najafi.mohamad2021@gmail.com
              </li>
            </ul>
          </div>
          <div className="bts">
            <a href="/cv.pdf" className="btn hover-animated" download>
              <span className="circle" />
              <span className="lnk">Download CV</span>
            </a>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default About;
