import Service from "/public/Services.png";

function Services() {
  return (
    <>
      <div className="container">
        <div className="services">
          <img className="services__img" src={Service} alt="Services" />
          <div className="services__card">
            <h1 className="services__title">Personalized Legal Services</h1>
            <p className="services__text">
              One size does not fit all when it comes to your legal needs. We
              craft a team and strategy specific to your desired outcome.
            </p>
            <button className="services__button">About Our Firm</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
