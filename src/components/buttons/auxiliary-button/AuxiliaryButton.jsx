import "./style.scss";

const AuxiliaryButton = ({ buttonText, onClick, imgUrl }) => {
  return (
    <div className="auxiliary_container">
      <button className="auxiliary_btn" onClick={onClick}>
        <img src={imgUrl} alt="" />
        {buttonText}
      </button>
    </div>
  );
};

export default AuxiliaryButton;
