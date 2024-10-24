import BnnerImg from "/public/banner.png";

function Banner() {
  return (
    <div className="main__wrap">
      <div className="container">
        <div className="main__banner">
          <div className="main__banner-left">
            <h1 className="main__banner-title">
              Corporate Legal Representation
            </h1>
            <p className="main__banner-text">
              We understand the difficulties and stress that your legal issues
              bring. Our team is committed to providing you with the individual
              attention, communication, and dedication you deserve
            </p>
            <button className="header__button">Request Consultation</button>
          </div>
          <div className="main__banner-right">
            <img src={BnnerImg} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
