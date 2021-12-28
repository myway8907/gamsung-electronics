import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import {
  FaRedhat,
  FaRing,
  FaServer,
  FaCog,
  FaHome,
  FaShareAlt,
} from "react-icons/fa";
import { MdOutlineHdrOnSelect } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import "./Services.scss";

const SERVICES = [
  "셀렉트샵",
  "새로운 갤럭시",
  "삼성 케어 플러스",
  "특별한 혜택",
  "공동구매",
];

const CARDS = [
  {
    id: 1,
    Icon: FaRedhat,
    bg: "rgb(59, 196, 163)",
    title: "갤럭시 캠퍼스 스토어",
    desc: "대학생, 대학원생과 대학 교원, 교직원을 위한 교육 할인 스토어",
  },
  {
    id: 2,
    Icon: FaRing,
    bg: "rgb(226, 148, 178)",
    title: "웨딩 | 신혼 샵",
    desc: "웨딩, 신혼 고객을 위한 특별한 할인 스토어",
  },
  {
    id: 3,
    Icon: FaServer,
    bg: "rgb(152, 196, 200)",
    title: "추천 모델",
    desc: "삼성닷컴이 엄선한 인기모델",
  },
  {
    id: 4,
    Icon: FaCog,
    bg: "rgb(178, 164, 194)",
    title: "아울렛",
    desc: "인기가전을 특별한 가격에",
  },
  {
    id: 5,
    Icon: FaHome,
    bg: "rgb(165, 195, 155)",
    title: "홈 피트니스",
    desc: "회원이라면 누구나 홈 피트니스 베이직 1달 체험권",
  },
  {
    id: 6,
    Icon: MdOutlineHdrOnSelect,
    bg: "rgb(98, 167, 233)",
    title: "MD 초이스샵",
    desc: "삼성 제품과 함께하면 더 좋은 MD상품",
  },
  {
    id: 7,
    Icon: BsHeadset,
    bg: "rgb(100, 170, 194)",
    title: "온라인 구매 상담사",
    desc: "무엇을 도와드릴까요?",
  },
  {
    id: 8,
    Icon: FaShareAlt,
    bg: "rgb(130, 130, 200)",
    title: "디지털프라자 VR 스토어",
    desc: "언제 어디서나 편하게 방문할 수 있는 비대면 온라인 스토어",
  },
];

const Services = () => {
  return (
    <section className="services">
      <ul className="services__tab">
        {SERVICES.map((service, idx) => (
          <li key={idx} className="service-name">
            {service}
          </li>
        ))}
      </ul>
      <section className="services__cards">
        {CARDS.map((card, idx) => (
          <ServiceCard
            key={idx}
            Icon={card.Icon}
            bg={card.bg}
            title={card.title}
            description={card.desc}
          />
        ))}
      </section>
    </section>
  );
};

export default Services;
