import "./AddProfileDetails.scss";

import { BsCircle, BsCircleFill } from "react-icons/bs";

import { useState, useEffect } from "react";

const AddUserGoals = () => {
  // User - Personal Goals
  const [userGoals, setUserGoals] = useState("");
  // Data - Goal options
  const [dataGoals, setDataGoals] = useState([]);
  // Data - Generate Select Goal Options on page load
  useEffect(() => {
    const getGoalData = async () => {
      const resposne = await fetch(`http://localhost:8000/api/goal/`, {
        method: "GET",
      });
      const data = await resposne.json();
      const dataArray = data;
      setDataGoals(dataArray);
    };

    getGoalData();
  }, []);
  // Map the goal selctors once loaded.
  const goalButtons = dataGoals.map((dataGoals) => {
    const selectUserGoals = (e) => {
      e.preventDefault();
      setUserGoals(e.target.id);
    };
    return (
      <div
        onClick={selectUserGoals}
        className={
          userGoals === dataGoals.title
            ? "goal-button goal-button--active"
            : "goal-button goal-button--inactive"
        }
        key={dataGoals._id}
        id={dataGoals.title}
      >
        <div className="goal-button__details">
          <h4 id={dataGoals.title}>{dataGoals.title}</h4>
          <p id={dataGoals.title}>{dataGoals.description}</p>
        </div>
        {userGoals === dataGoals.title ? (
          <div className="goal-button__icon goal-button__icon--active">
            <span>
              <BsCircleFill className="icon--button" />
            </span>
          </div>
        ) : (
          <div className="goal-button__icon goal-button__icon--inactive">
            <span>
              <BsCircle className="icon--button" />
            </span>
          </div>
        )}
      </div>
    );
  });

  return (
    <>
      {/* Personal Fitenss Goals */}
      {/* className={formNav === 2 ? "form-container" : "hide"} */}
      <div className="form-container">
        <header className="form-header">
          <h1>Your fitness goals</h1>
          <p>
            Knowing more about your objectives helps us set better goals for you
          </p>
        </header>
        <form className="form--profile-details" action="">
          {goalButtons ? goalButtons : null}

          <button className="btn-primary">Complete</button>
        </form>
      </div>
    </>
  );
};

export default AddUserGoals;
