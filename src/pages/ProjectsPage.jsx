import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/calcu.png";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "나의 프로젝트1",
      description: "머신러닝 기반 이미지 보정 프로젝트",
      linl: "https://github.com/kang0225/sharpening-image-by-ausm"
    },
    {
      title: "나의 프로젝트2",
      description: "캡스톤 프로젝트에서의 서울시 혼잡도 예측 플랫폼",
      link: "https://github.com/kang0225/seoul-low-congestion-explorer"
    },
    {
      title: "나의 프로젝트3",
      description: "서울시 미세먼지 예측 ai 모델",
      link: "https://github.com/kang0225/air-quality-logistic-regression",
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
