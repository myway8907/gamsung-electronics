import "./Info.scss";

const Info = ({ header, title, subtitle, children }) => {
  return (
    <secion className="main-info">
      <p className="main-info-header">{header}</p>
      <h2 className="main-info-title">{title}</h2>
      <p className="main-info-subtitle">{subtitle}</p>
      {children}
    </secion>
  );
};

export default Info;
