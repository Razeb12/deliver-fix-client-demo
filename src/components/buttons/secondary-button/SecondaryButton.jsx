import "./style.scss";

const SecondaryButton = ({ buttonText, onClick, imgUrl }) => {
  return (
    <div className="secondary_container">
      <button className="secondary_btn" onClick={onClick}>
        <img src={imgUrl} alt="" />
        {buttonText}
      </button>
    </div>
  );
};

export default SecondaryButton;
