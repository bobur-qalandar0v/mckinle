import Header from "./components/Header";
import "./assets/scss/main.scss";
import Banner from "./components/Banner";
import Practice from "./components/Practice";
import Services from "./components/Services";
import Slider from "./components/Slides";
import Footer from "./components/Footer";
import { useState } from "react";
import Articles from "./components/Articles";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`wrapper ${open ? "open" : ""} `}>
      <Header open={open} setOpen={setOpen} />
      <main className="main">
        <Banner />
        <Practice />
        <Services />
        <Slider />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
