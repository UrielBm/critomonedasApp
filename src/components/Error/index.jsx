import "./Style.scss";
const Error = ({ text }) => {
  return (
    <div className="Error">
      <span className="text">{text}</span>
    </div>
  );
};

export default Error;
