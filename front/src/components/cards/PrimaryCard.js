import "./PrimaryCard.scss";

import TestImage from "../../assets/images/PushOne.JPG";

const PrimaryCard = () => {
  return (
    <div
      className="primay-card"
      style={{
        backgroundImage: `url(${TestImage})`,
        backgroundRepeat: ` no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
      }}
    >
      <div className="primay-card__background-tint">
        <div className="primary-card__content">
          <header className="primay-card__header">
            <h3 className="font-light">PUSH DAY - A</h3>
          </header>
          <footer className="primay-card__footer">
            <span className="font-light">Exercises: 8</span>
            <span className="font-light">Length: 80mins</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
