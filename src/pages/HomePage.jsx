import React from "react";
import FeatureCard from "../components/FeatureCard";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: "저는 정보통신공학과 강민종입니다.",
    },
    {
      title: "프로젝트",
      description: "https://github.com/kang0225",
    },
    {
      title: "연락처",
      description: "010-5532-23**",
    },
    {
      title: "인스타그램",
      description: "@minwhd",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
