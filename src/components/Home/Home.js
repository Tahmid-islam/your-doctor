import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Facilities from "../Facilities/Facilities";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Doctors></Doctors>
      <Facilities></Facilities>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
