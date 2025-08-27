import { Fragment, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailSend = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: "najafi.mohamad2021@gmail.com",
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        "service_0lank0t",
        "template_c359wn9",
        templateParams,
        "Eg0vSjsxOo4fy0_zG"
      );
      console.log(result.text);
      setFormData({ name: "", email: "", message: "" });
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Thanks, your message is sent successfully.",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: "sweet-alert-custom",
        },
      });
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to send message. Please try again.",
        confirmButtonText: "OK",
        timer: 3000,
        timerProgressBar: true,
        customClass: {
          popup: "sweet-alert-custom",
        },
      });
    }
  };

  return (
    <Fragment>
      {/* Section Contacts Info */}
      <div className="section contacts" id="next_section">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Info</div>
          </div>
          {/* contacts items */}
          <div className="service-items">
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-phone" />
                </div>
                <div className="name">Phone</div>
                <div className="text">+98 (921) 346 91 31</div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-envelope" />
                </div>
                <div className="name">Email</div>
                <div className="text">
                  <a href="mailto:steve-pearson@gmail.com">
                    najafi.mohamad2021@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-map-marker-alt" />
                </div>
                <div className="name">Address</div>
                <div className="text">
                  No. 14 Morvarid St, Saadat Abad, Tehran, Iran
                </div>
              </div>
            </div>
            <div className="service-col">
              <div className="service-item content-box">
                <div className="icon">
                  <span className="fas fa-user-tie" />
                </div>
                <div className="name">Freelance Available</div>
                <div className="text">I am available for Freelance hire</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
      {/* Section Contacts Form */}
      <div className="section contacts" id="section-contacts">
        <div className="content">
          {/* title */}
          <div className="title">
            <div className="title_inner">Contacts Form</div>
          </div>
          {/* form */}
          <div className="contact_form content-box">
            <form id="cform" method="post" onSubmit={handleEmailSend}>
              <div className="group-val">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="group-val">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="group-val ct-gr">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="group-bts">
                <button type="submit" className="btn hover-animated">
                  <span className="circle" />
                  <span className="lnk">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};

export default ContactSection;
