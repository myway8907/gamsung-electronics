import React from "react";
import ServiceCard from "./ServiceCard/ServiceCard";
import { CARDS, SERVICES } from "../data";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <ul className="services-tab">
        {SERVICES.map((service, idx) => (
          <li key={idx} className="service-name">
            {service}
          </li>
        ))}
      </ul>
      <section className="services-cards">
        {CARDS.map((card, idx) => (
          <ServiceCard key={idx} card={card} />
        ))}
      </section>
    </section>
  );
};

export default Services;
