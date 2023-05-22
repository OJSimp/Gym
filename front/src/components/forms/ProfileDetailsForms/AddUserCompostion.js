import "./AddProfileDetails.scss";

import { useState } from "react";

// components
import NumberInput from "../../inputs/NumberInput";

const AddUserCompostion = () => {
  // User - Body Composition
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleUserComposition = (e) => {
    e.preventDefault();

    console.log(height, weight);
  };

  return (
    // className={formNav === 1 ? "form-container" : "hide"}
    <div className="form-container">
      <header className="form-header">
        <h1>About your body</h1>
        <p>
          Knowing more about your body composition helps us set better goals for
          you
        </p>
      </header>
      <form className="form--profile-details">
        <div className="input-composition">
          <h4>Your Weight</h4>
          <NumberInput
            id="body-weight"
            label="(kg)"
            error="error message"
            setInputValue={(value) => setWeight(value)}
          />
        </div>

        <div className="input-composition">
          <h4>Your Height</h4>
          <NumberInput
            id="body-weight"
            label="(ft)"
            error="error message"
            setInputValue={(value) => setHeight(value)}
          />
        </div>

        <button onClick={handleUserComposition} className="btn-primary">
          Continue
        </button>
      </form>
    </div>
  );
};

export default AddUserCompostion;
