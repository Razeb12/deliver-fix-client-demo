import "./style.scss";

const SuggestionCard = ({ header, content }) => {
  return (
    <div className="suggestion_container">
      <div className="suggestion_header">
        <h4>{header}</h4>
        <div className="suggestion_card">
          {content.map((item, index) => (
            <div key={index} className="suggestion_box">
              <div className="suggestion_card_left">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <h3>
                  <span>+ €</span>
                  {item.price}
                </h3>
                <button>Add</button>
              </div>
              <div className="suggestion_card_right">
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
