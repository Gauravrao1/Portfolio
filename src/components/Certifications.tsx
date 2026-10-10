import { MdArrowOutward } from "react-icons/md";
import "./styles/Certifications.css";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    credentialLink: "https://drive.google.com/file/d/1l-bSxdJDcBo53UROK9ZfQjbeACNjZTLU/view?usp=sharing",
  },
  {
    title: "Google Data Analytics Professional",
    issuer: "Google / Coursera",
    credentialLink: "https://drive.google.com/file/d/1pY29caCAk8qWOVWunYMu30vt2tJ_XbvU/view?usp=sharing",
  },
  {
    title: "Clean, Refine & Visualize Data",
    issuer: "IBM SkillsBuild",
    credentialLink: "https://drive.google.com/file/d/1vjFxv-pIqEUGpB5Wv8DPk6O1zFJq8YGi/view?usp=sharing",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Kaggle",
    credentialLink: "https://drive.google.com/file/d/1Z3edHo2OkTUtxFQDnMYYIvZCMFVkXgo2/view?usp=sharing",
  },
  {
    title: "Data Analytics",
    issuer: "Scaler",
    credentialLink: "https://moonshot.scaler.com/s/YOUR_ID",
  },
  {
    title: "Java Certification(Tranning)",
    issuer: "Intershala",
    credentialLink: "https://drive.google.com/file/d/136-fM2jmH2WItjWtdrR2nl8BK4BKWXKU/view?usp=sharing",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "Tcs",
    credentialLink: "https://drive.google.com/file/d/1k0_lWF5s_ENZREpY9F-LPbZcRY6vWcMq/view?usp=sharing",
  },
  {
    title: "Oracle Dev Gym",
    issuer: "Oracle",
    credentialLink: "https://drive.google.com/file/d/1mCDtZMARxVKUNtBwVwx5BMD6e7gOw_Ig/view?usp=sharing",
  },
  {
    title: "Cognizant Technoverse round 1 winner",
    issuer: "Internshala",
    credentialLink: "https://drive.google.com/file/d/13WmgwNupt8XxkqHRQZgRkJNq-yFShJ2C/view?usp=sharing",
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
