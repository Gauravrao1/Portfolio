import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <div className="about-kicker">Let's connect</div>
          <h3>Open for ambitious ideas, collaborations, and thoughtful builds.</h3>
        </div>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:gauravraorao6@gmail.com" data-cursor="disable">
                gauravraorao6@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+918400133970" data-cursor="disable">
                +91 8400133970
              </a>
            </p>
            <h4>Location</h4>
            <p>Lucknow, Uttar Pradesh, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Gauravrao1"
              target="_blank"
              data-cursor="disable"
              rel="noreferrer"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-rao-297454320/"
              target="_blank"
              data-cursor="disable"
              rel="noreferrer"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/gauravrao_1/"
              target="_blank"
              data-cursor="disable"
              rel="noreferrer"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href="https://www.hackerrank.com/profile/gauravraorao6"
              target="_blank"
              data-cursor="disable"
              rel="noreferrer"
              className="contact-social"
            >
              HackerRank <MdArrowOutward />
            </a>
            <a
              href="mailto:gauravraorao6@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and developed <br /> by <span>Gaurav Rao</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
