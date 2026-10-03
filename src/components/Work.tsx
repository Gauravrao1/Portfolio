import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Adaptive 2.5D LiDAR Mapping — PointPilot",
    category: "AI / Computer Vision",
    description:
      "Variable-resolution LiDAR mapping system for dynamic environment perception using semantic classification and adaptive polar grids.",
    tools: "Python, PyTorch, PointNet, SemanticKITTI, Plotly, Dash",
    highlights: "Semantic Segmentation • Adaptive Resolution • 2.5D Grid • Visualization",
    status: "In Progress",
    image: "/images/Adaptive.png",
    liveLink: "https://lidar2-5-rags2.vercel.app/",
  },
  {
    title: "Med-Sathi — Healthcare Platform",
    category: "Full-Stack",
    description:
      "Full-stack healthcare application built with TypeScript for patient-facing digital health services.",
    epoLink: "https://github.com/Gauravrao1",tools: "TypeScript, React, Node.js, REST APIs",
    highlights: "Healthcare • Full-Stack • TypeScript • Patient Services",
    status: "Completed",
    image: "/images/medsathi.png",
    liveLink: "https://med-sathi-frontend-qqybhd90o-rags2.vercel.app/",
  },
  {
    title: "Provider Data Cleaner",
    category: "Data Engineering",
    description:
      "Data-cleaning application for CSV provider data with validation, anomaly detection, and automated cleaning pipeline.",
    tools: "React, Python, CSV Processing, Google Maps API",
    highlights: "Data Validation • Automation • Dashboard • CSV Pipeline",
    status: "Completed",
    image: "/images/cleaner.png",
    liveLink: "https://github.com/Gauravrao1",
    repoLink: "https://github.com/Gauravrao1",
  },
  {
    title: "Smart Resume Screening & Ranking",
    category: "NLP / AI",
    description:
      "AI-powered recruitment tool using NLP and semantic embeddings to match resumes to job descriptions and rank candidates.",
    tools: "Python, NLP, Sentence Transformers, Scikit-learn, FAISS",
    highlights: "Semantic Matching • Candidate Ranking • Skill Extraction",
    status: "Completed",
    image: "/images/aidtector.png",
    liveLink: "https://github.com/Gauravrao1",
    repoLink: "https://github.com/Gauravrao1",
  },
  {
    title: "Skill Enhancement Platform",
    category: "Full-Stack EdTech",
    description:
      "Django-based learning platform with authentication, course management, progress tracking and skill-gap recommendations.",
    tools: "Python, Django, MySQL, JavaScript, jQuery",
    highlights: "Authentication • Course Management • Progress Tracking • Recommendations",
    status: "Completed",
    image: "/images/skill.png",
    liveLink: "https://skill-enhancement-platform-server-h.vercel.app/",
  },
  {
    title: "Civic Issue Management Platform",
    category: "Full-Stack / Civic Tech",
    description:
      "Platform enabling citizens to submit, track, and resolve civic issues with role-based access and REST API architecture.",
    tools: "Python, Django, MySQL, REST APIs, jQuery",
    highlights: "Issue Tracking • Role-Based Access • API Architecture • Query Optimization",
    status: "Completed",
    image: "/images/airpollution (1).png",
    liveLink: "https://github.com/Gauravrao1",
    repoLink: "https://github.com/Gauravrao1",
  },
  {
    title: "Deepfake Detection System",
    category: "Computer Vision",
    description:
      "AI-based system to detect manipulated media using CNN-based classification on extracted video frames.",
    tools: "Python, OpenCV, CNN, Deep Learning",
    highlights: "Frame Extraction • CNN Classification • Real vs Fake",
    status: "Completed",
    image: "/images/aidtector.png",
    liveLink: "https://github.com/Gauravrao1",
    repoLink: "https://github.com/Gauravrao1",
  },
  {
    title: "AI Vital Analysis & Health Prediction",
    category: "Healthcare AI",
    description:
      "Machine learning system predicting health risks based on patient vitals using classification models.",
    tools: "Python, Scikit-learn, Pandas, MySQL",
    highlights: "Health Prediction • Vital Monitoring • ML Models",
    status: "Completed",
    image: "/images/heartbeat.png",
    liveLink: "https://github.com/Gauravrao1",
    repoLink: "https://github.com/Gauravrao1",
  },
];

const Work = () => {
  useEffect(() => {
    const workFlex = document.querySelector<HTMLElement>(".work-flex");
    const workSection = document.querySelector<HTMLElement>(".work-section");
    if (!workFlex || !workSection) return;

    const media = gsap.matchMedia();
    media.add("(min-width: 1026px)", () => {
      const translateX = Math.max(0, workFlex.scrollWidth - workFlex.clientWidth);
      if (translateX === 0) return undefined;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: workSection,
          start: "top top",
          end: `+=${translateX}`,
          scrub: 0.6,
          pin: true,
          id: "work",
        },
      });

      timeline.to(workFlex, { x: -translateX, ease: "none" });
      return () => timeline.kill();
    });

    return () => {
      media.revert();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <div className="work-header">
          <div className="about-kicker">Selected work</div>
          <h2>
            Projects shaped by <span>curiosity</span> and craft.
          </h2>
        </div>
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
                <div className="work-meta">
                  <span className="work-status">{project.status}</span>
                  <span className="work-category">{project.category}</span>
                </div>
                <p className="work-description">{project.description}</p>
                <p className="work-tools">{project.tools}</p>
                <p className="work-highlights">{project.highlights}</p>
                <div className="work-links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="work-link-btn"
                      data-cursor="disable"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="work-link-btn work-link-secondary"
                      data-cursor="disable"
                    >
                      GitHub <MdArrowOutward />
                    </a>
                  )}
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;