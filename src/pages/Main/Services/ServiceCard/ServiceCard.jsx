import "./ServiceCard.scss";

const ServiceCard = ({ Icon, bg, title, description }) => {
  return (
    <div className="card">
      <Icon size={60} style={{ "--bgColor": bg }} />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
