import Logo from "/public/whiteLogo.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wrap">
            <div className="footer__left">
              <div className="whiteLogo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="footer__abouts">
                <p>2972 Westheimer Road</p>
                <p>Denver, CO 80021</p>
                <a href="tel: (720) 555-0123">(720) 555-0123</a>
                <a href="mailto:info.denver@mckinley.com">
                  info.denver@mckinley.com
                </a>
              </div>
              <div className="footer__links">
                <a href="https://www.facebook.com/">Facebook</a>
                <a href="https://www.linkedin.com/login">Linkedin</a>
                <a href="https://x.com/login">Twitter</a>
              </div>
            </div>
            <div className="footer__right">
              <h1 className="footer__title">
                Get legal news, advice, and best practices delivered to your
                inbox.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
