import { MdArrowOutward } from "react-icons/md";
import "./styles/Certifications.css";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=YOUR_ID",
  },
  {
    title: "Google Data Analytics Professional",
    issuer: "Google / Coursera",
    credentialLink: "https://www.coursera.org/account/accomplishments/YOUR_ID",
  },
  {
    title: "Oracle Database Foundations",
    issuer: "Oracle",
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=YOUR_ID",
  },
  {
    title: "Databases for Developers: Foundations",
    issuer: "Oracle",
    credentialLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=YOUR_ID",
  },
  {
    title: "Clean, Refine & Visualize Data",
    issuer: "IBM SkillsBuild",
    credentialLink: "https://www.credly.com/badges/YOUR_ID",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Kaggle",
    credentialLink: "https://www.kaggle.com/learn/certification/YOUR_ID",
  },
  {
    title: "Data Analytics",
    issuer: "Scaler",
    credentialLink: "https://moonshot.scaler.com/s/YOUR_ID",
  },
  {
    title: "Java Certification",
    issuer: "Scaler",
    credentialLink: "https://moonshot.scaler.com/s/YOUR_ID",
  },
  {
    title: "Spring Boot Development",
    issuer: "freeCodeCamp",
    credentialLink: "https://www.freecodecamp.org/certification/YOUR_ID",
  },
  {
    title: "Oracle Dev Gym",
    issuer: "Oracle",
    credentialLink: "https://devgym.oracle.com/pls/apex/f?p=10001:YOUR_ID",
  },
  {
    title: "Java Training",
    issuer: "Internshala",
    credentialLink: "https://trainings.internshala.com/s/YOUR_ID",
  },
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <div className="about-kicker">Certifications</div>
        <h2>Continuous <span>learning</span> and growth.</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-card-top">
                <div className="cert-issuer">{cert.issuer}</div>
                <h4>{cert.title}</h4>
              </div>
              {cert.credentialLink && (
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-credential-link"
                  data-cursor="disable"
                >
                  View Credential <MdArrowOutward />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
