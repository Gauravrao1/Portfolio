import "./styles/TechStack.css";

const techCategories = [
  {
    label: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C"],
  },
  {
    label: "AI / ML",
    items: ["Scikit-Learn", "PyTorch", "TensorFlow", "Keras", "NLP", "OpenCV", "FAISS", "Hugging Face"],
  },
  {
    label: "Data & Analytics",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Tableau", "IBM Cognos", "Plotly"],
  },
  {
    label: "Web & Frameworks",
    items: ["React", "Django", "Spring Boot", "Node.js", "Express", "HTML/CSS", "jQuery"],
  },
  {
    label: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    label: "Tools & Platform",
    items: ["Git", "GitHub", "Jupyter", "Google Colab", "VS Code", "Kaggle", "Postman", "Excel"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack-section section-container" id="techstack">
      <div className="techstack-container">
        <div className="about-kicker">Tech Stack</div>
        <h2>Tools &amp; technologies I <span>work with</span>.</h2>
        <div className="tech-categories">
          {techCategories.map((cat, index) => (
            <div className="tech-category" key={index}>
              <h4>{cat.label}</h4>
              <div className="tech-items">
                {cat.items.map((item, i) => (
                  <span className="tech-pill" key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
