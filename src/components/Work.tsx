import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
{
title: "AI-Based Vital Analysis & Health Prediction System",
category: "Healthcare AI",
description:
"AI-powered healthcare analytics platform that monitors vital parameters and predicts possible health conditions using machine learning models.",
tools:
"Python, Machine Learning, Pandas, Data Analysis",
highlights:
"Health Monitoring • Prediction Engine • Dashboard • Data Visualization",
status: "Completed",
},

{
title: "Aadhaar Societal Trend Analytics",
category: "Hackathon Project",
description:
"Data-driven analytics solution focused on identifying societal trends and generating actionable insights from structured datasets.",
tools:
"SQL, Python, Data Visualization",
highlights:
"Analytics • Dashboard • Data Processing • Trend Detection",
status: "Completed",
},

{
title: "AI Enhanced Citizen Pollution Monitor",
category: "Environmental Analytics",
description:
"Smart monitoring system that analyzes pollution data and provides meaningful environmental insights.",
tools:
"Python, APIs, ML, Visualization",
highlights:
"Pollution Tracking • Prediction • Reports • Visualization",
status: "Completed",
},

{
title: "Deepfake Detection System",
category: "Computer Vision",
description:
"AI-based system designed to detect manipulated images and media using machine learning techniques.",
tools:
"Python, OpenCV, ML",
highlights:
"Image Analysis • Detection • AI Security",
status: "Completed",
},

{
title: "Attendance with Face Recognition",
category: "Automation",
description:
"Automated attendance system using computer vision and facial recognition technology.",
tools:
"Python, OpenCV, Face Recognition",
highlights:
"Face Detection • Attendance Automation • Records",
status: "Completed",
},

{
title: "Predictive Analytics for Machine Maintenance",
category: "Predictive Maintenance",
description:
"Machine learning solution developed to predict machine failures and optimize maintenance schedules.",
tools:
"Python, Machine Learning, Analytics",
highlights:
"Prediction • Industrial Analytics • Monitoring",
status: "Completed",
},
];
const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image="/images/aidtector.png" alt="" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;