import MoreIcon from "../assets/icons/MoreIcon";
import { articlesData } from "./data";

function Articles() {
  return (
    <>
      <div className="container">
        <div className="articles">
          <h1 className="articles__title">Recent Articles</h1>
          <div className="articles__cards">
            {articlesData.map((item) => (
              <div className="articles__card" key={item.id}>
                <img src={item.image} alt="error" />
                <div className="articles__contents">
                  <p className="articles__text">{item.title}</p>
                  <p className="articles__content">{item.subtitle}</p>
                  <button className="articles__button">
                    Learn More <MoreIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Articles;
