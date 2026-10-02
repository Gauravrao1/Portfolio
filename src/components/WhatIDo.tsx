import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const pillars = [
  {
    title: "BUILD",
    description: "I build practical software, web, and API-driven projects that turn ideas into usable products.",
    skills: ["Java", "Python", "React", "Spring Boot", "Django", "REST APIs", "MySQL", "Git"],
  },
  {
    title: "ANALYZE",
    description: "I explore data, train models, and use analytics to build AI and machine learning solutions with measurable value.",
    skills: ["Machine Learning", "Pandas", "NumPy", "Scikit-Learn", "Jupyter", "IBM Cognos", "FAISS"],
  },
  {
    title: "VISUALIZE",
    description: "I create insightful dashboards and data stories that transform raw numbers into clear decisions.",
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly", "Dash", "IBM SPSS"],
  },
  {
    title: "SOLVE",
    description: "I practice algorithmic thinking and problem solving to write efficient, reliable, and scalable code.",
    skills: ["DSA", "Arrays", "Strings", "HashMap", "Trees", "Sorting", "Bit Manipulation", "OOP"],
  },
];

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
            >
              {index < 2 && (
                <div className="what-border1">
                  <svg height="100%">
                    <line x1="0" y1={index === 0 ? "0" : "100%"} x2="100%" y2={index === 0 ? "0" : "100%"} stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                    {index === 0 && <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />}
                  </svg>
                </div>
              )}
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{pillar.title}</h3>
                <h4>Description</h4>
                <p>{pillar.description}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {pillar.skills.map((skill, i) => (
                    <div className="what-tags" key={i}>{skill}</div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
