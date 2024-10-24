import MoreIcon from "../assets/icons/MoreIcon";
import { practiceData } from "./data";

function Practice() {
  return (
    <div className="container">
      <div className="practice">
        <h1 className="practice__title">Areas of Practice</h1>
        <p className="practice__text">
          Our disciplined approach to resolving your legal issues will produce
          the best-possible outcome.
        </p>
        <div className="practice__cards">
          {practiceData.map((item) => (
            <div className="practice__card" key={item.id}>
              <img src={item.image} alt="card" />
              <p className="practice__title">{item.title}</p>
              <p className="practice__card-text">
                {item.subtitle}
              </p>
              <div className="practice__card-bottom">
                <a className="practice__card-link" href="#">
                  Learn more
                </a>
                <p>
                  <MoreIcon />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Practice;
