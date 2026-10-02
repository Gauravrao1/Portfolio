import { PropsWithChildren, useState } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const [portraitFailed, setPortraitFailed] = useState(false);

  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-intro">
          <div className="landing-badge">AI / ML • Data Analytics • Software Engineering</div>
          <h1>GAURAV<br />RAO</h1>
          <p className="landing-lead">
            I build practical projects in AI, data analytics, full-stack development, and software engineering. My work includes NLP, computer vision, machine learning, Java, DSA. I enjoy turning ideas into useful applications, intelligent systems, and real-world solutions.
          </p>
          <div className="landing-cta-row">
            <a href="#work" className="landing-cta-primary" data-cursor="disable">View Projects</a>
            <a href="#contact" className="landing-cta-secondary" data-cursor="disable">Get In Touch</a>
          </div>
          <div className="landing-stats-row">
            <div className="landing-stat">
              <span className="landing-stat-num">67+</span>
              <span className="landing-stat-label">Repositories</span>
            </div>
            <div className="landing-stat">
              <span className="landing-stat-num">5★</span>
              <span className="landing-stat-label">HackerRank Java</span>
            </div>
            <div className="landing-stat">
              <span className="landing-stat-num">🏆</span>
              <span className="landing-stat-label">Hackathon Winner</span>
            </div>
          </div>
        </div>

        <div className="landing-center" aria-hidden="true">
          <div className="landing-portrait-wrap">
            {!portraitFailed ? (
              <img
                className="landing-portrait"
                src="/images/profile.png"
                alt="Portrait of Gaurav Rao"
                onError={() => setPortraitFailed(true)}
              />
            ) : (
              <div className="landing-portrait-fallback">
                <div className="fallback-orb" />
                <div className="fallback-face">
                  <div className="fallback-hair" />
                  <div className="fallback-glasses" />
                  <div className="fallback-body" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Landing;
