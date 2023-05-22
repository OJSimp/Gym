import "./AddProfileDetails.scss";

import { useState, useEffect } from "react";

// components
import TextInput from "../../inputs/TextInput";

// hooks
import { useMultistepForm } from "../../../hooks/useMultistepFrom.ts";

const AddUserDOB = () => {
  // User - Date Of Birth
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [userAge, setUserAge] = useState(0);

  // Form navigation between steps
  const { next } = useMultistepForm([]);

  // Generate User Age - onChange of user birth date
  useEffect(() => {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();

    setUserAge(age);
  }, [dateOfBirth]);

  return (
    <>
      {/* className={formNav === 0 ? "form-container" : "hide"} */}
      <div className="form-container">
        <header className="form-header">
          <h1>When is your birthday?</h1>
          <p>Knowing your date of birth helps us set better goals for you</p>
        </header>
        <form className="form--profile-details">
          {/* Date Of Birth Input */}
          <TextInput
            id="date-of-birth"
            type="date"
            label="Date Of Birth"
            error="error message"
            setInputValue={(value) => setDateOfBirth(value)}
          />
          <div>
            <h3>{userAge ? userAge : "0"}</h3>
            <p className="">Years Old</p>
          </div>
          <button type="button" className="btn-primary" onClick={next}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUserDOB;
