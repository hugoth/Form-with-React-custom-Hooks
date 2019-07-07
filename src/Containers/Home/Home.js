import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container-home">
      <Header />
      <div className="title-home">
        <h2>My book</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          viverra ex in gravida rhoncus. In venenatis nibh eget tincidunt
          blandit. Sed fermentum posuere interdum. Quisque molestie a ipsum et
          dapibus. Mauris scelerisque diam sem, tristique finibus sem commodo
          nec.
        </p>
        <button className="slide">Slide</button>
      </div>
    </div>
  );
};

export default Home;
