import "./styles/Achievements.css";

const achievements = [
  {
    icon: "🏆",
    title: "IBM Technovate Hackathon",
    detail: "Winner",
    description:
      "Built an end-to-end solution under competitive constraints, demonstrating full-stack and AI capabilities.",
  },
  {
    icon: "🥇",
    title: "India AI Impact Buildathon",
    detail: "Qualifier",
    description:
      "Selected among thousands of participants nationwide for an AI-driven impact project.",
  },
  {
    icon: "🚀",
    title: "Smart India Hackathon",
    detail: "Internal Qualifier",
    description:
      "Qualified through university-level rounds with a LiDAR-based adaptive mapping solution.",
  },
  {
    icon: "🎯",
    title: "IIT Kharagpur Hackathon",
    detail: "Participant",
    description:
      "Competed at one of India's top technical institutes on a real-world problem statement make Rag system using Pathways who give verdict insted of hallucination",
  },
  {
    icon: "⭐",
    title: "HackerRank 5-Star Java",
    detail: "Gold Badge",
    description:
      "Achieved the highest star rating in Java on HackerRank through consistent problem solving.",
  },
];

const codingStats = [
  { label: "GitHub Repos", value: "Active" },
  { label: "LeetCode", value: "Active" },
  { label: "HackerRank", value: "5★ Java" },
  { label: "GitHub Stars", value: "23+" },
  { label: "Certifications", value: "10+" },
  { label: "Projects Shipped", value: "15+" },
];

const strengths = [
  { icon: "🧠", label: "Problem Solver" },
  { icon: "🤝", label: "Team Player" },
  { icon: "⚡", label: "Fast Learner" },
  { icon: "🎨", label: "Clean Code" },
  { icon: "📈", label: "Data-Driven" },
];

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <div className="about-kicker">Achievements & Recognition</div>
        <h2>
          Built through <span>competition</span>, driven by{" "}
          <span>curiosity</span>.
        </h2>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-content">
                <h4>{item.title}</h4>
                <span className="achievement-badge">{item.detail}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="strengths-row">
          <h3>What Sets Me Apart</h3>
          <div className="strengths-grid">
            {strengths.map((s, i) => (
              <div className="strength-chip" key={i}>
                <span className="strength-icon">{s.icon}</span>
                <span className="strength-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="coding-stats">
          <h3>Coding Profile</h3>
          <div className="coding-stats-grid">
            {codingStats.map((stat, index) => (
              <div className="coding-stat-card" key={index}>
                <div className="coding-stat-value">{stat.value}</div>
                <div className="coding-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
