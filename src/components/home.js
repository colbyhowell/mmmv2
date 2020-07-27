import React from "react";
import * as HomeD from "../styles/home-style";
import flip from "../../src/flip.jpg";

const Home = () => {
  return (
    <HomeD.HomeIntro>
      <HomeD.HomeTitle>
        Welcome to Colby's SCP Health Take Home Test
      </HomeD.HomeTitle>
      <HomeD.Flip>
        <img src={flip} className="flip" alt="flip" />
      </HomeD.Flip>
    </HomeD.HomeIntro>
  );
};

export default Home;
