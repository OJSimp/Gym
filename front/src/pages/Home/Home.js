import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components

import PrimaryCard from "../../components/cards/PrimaryCard";

const Home = () => {
  return (
    <div className="home-page page ">
      <NavLink to="/create-workout">Create Workout</NavLink>

      <div className="">
        <header>
          <h4>Today's Workout</h4>
        </header>
        <PrimaryCard />
      </div>

      <h4> Workout</h4>
    </div>
  );
};

export default Home;
