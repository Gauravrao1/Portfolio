import "./styles/Certifications.css";

const certifications = [
  { title: "Oracle Cloud Infrastructure AI Foundations", issuer: "Oracle" },
  { title: "Google Data Analytics Professional", issuer: "Google / Coursera" },
  { title: "Oracle Database Foundations", issuer: "Oracle" },
  { title: "Databases for Developers: Foundations", issuer: "Oracle" },
  { title: "Clean, Refine & Visualize Data", issuer: "IBM SkillsBuild" },
  { title: "Introduction to Machine Learning", issuer: "Kaggle" },
  { title: "Data Analytics", issuer: "Scaler" },
  { title: "Java Certification", issuer: "Scaler" },
  { title: "Spring Boot Development", issuer: "freeCodeCamp" },
  { title: "Oracle Dev Gym", issuer: "Oracle" },
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
              <div className="cert-issuer">{cert.issuer}</div>
              <h4>{cert.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
