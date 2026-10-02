import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-panel">
        <div className="about-kicker">About me</div>
        <h3>
          Designing thoughtful digital products where intelligence feels effortless.
        </h3>
        <p className="about-bio">
          I'm Gaurav Rao, a Computer Science student specializing in Data Science &amp; Artificial Intelligence at Shri Ramswaroop Memorial University. I'm driven by curiosity, experimentation, and turning ideas into tangible experiences. I enjoy building AI-powered solutions, working with data, and shaping products that feel sharp, useful, and human.
        </p>
        <div className="about-grid">
          <div className="about-card">
            <div className="about-card-num">01</div>
            <h4>AI &amp; Machine Learning</h4>
            <p>NLP, Computer Vision, LiDAR, Deepfake Detection, Predictive Modeling</p>
          </div>
          <div className="about-card">
            <div className="about-card-num">02</div>
            <h4>Data Analytics &amp; BI</h4>
            <p>Power BI, Tableau, IBM Cognos, EDA, Dashboard Development</p>
          </div>
          <div className="about-card">
            <div className="about-card-num">03</div>
            <h4>Full-Stack Development</h4>
            <p>React, Django, Spring Boot, REST APIs, MySQL, PostgreSQL</p>
          </div>
          <div className="about-card">
            <div className="about-card-num">04</div>
            <h4>Java &amp; DSA</h4>
            <p>Core Java, OOP, Arrays, Strings, Collections, Problem Solving</p>
          </div>
          <div className="about-card about-card-highlight">
            <div className="about-card-num">05</div>
            <h4>Product Thinking</h4>
            <p>Hackathon-tested ideation, solution design, and implementation under real constraints</p>
          </div>
        </div>
        <div className="about-info-row">
          <div className="about-info-item">
            <span className="about-info-label">Degree</span>
            <span className="about-info-value">B.Tech CSE (DS &amp; AI)</span>
          </div>
          <div className="about-info-item">
            <span className="about-info-label">University</span>
            <span className="about-info-value">SRMU, Uttar Pradesh</span>
          </div>
          <div className="about-info-item">
            <span className="about-info-label">Graduation</span>
            <span className="about-info-value">May 2027</span>
          </div>
          <div className="about-info-item">
            <span className="about-info-label">Interests</span>
            <span className="about-info-value">AI, ML, Data, Software</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
