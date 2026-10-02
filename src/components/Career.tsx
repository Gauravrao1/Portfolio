import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (DS &amp; AI)</h4>
                <h5>Shri Ramswaroop Memorial University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building a foundation in software engineering, AI, data science,
              and problem solving while working on real-world projects and
              hackathon-based product development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analysis Intern</h4>
                <h5>TechDocks Labs — Lucknow</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Worked on data processing, validation, and dashboard development
              using SQL, Python, and Excel. Produced analytical reports and
              collaborated with cross-functional teams on data-driven projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons &amp; Innovation</h4>
                <h5>IBM Technovate Winner • India AI Finalist</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Won IBM Technovate Hackathon. National finalist at India AI Impact
              Buildathon. Qualified internal rounds of Smart India Hackathon.
              Participated at IIT Kharagpur Hackathon.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>DSA &amp; Continuous Learning</h4>
                <h5>LeetCode • HackerRank 5★ Java</h5>
              </div>
              <h3>ONGOING</h3>
            </div>
            <p>
              Active problem solving on LeetCode and HackerRank.
              Strengthening algorithms, data structures, and interview-ready
              skills through regular practice. Certified through Oracle, Google,
              IBM, and Kaggle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
