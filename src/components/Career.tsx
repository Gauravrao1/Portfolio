import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (DS & AI)</h4>
                <h5>Academic & project development</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building a foundation in software engineering, AI, data science,
              and problem solving while working on real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Innovation</h4>
                <h5>Team-based problem solving</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Participated in collaborative challenges where I worked on idea
              validation, solution design, and implementation under time
              constraints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA & Continuous Learning</h4>
                <h5>Coding practice and growth</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Strengthening algorithms, data structures, and interview-ready
              problem solving through regular practice and iteration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
