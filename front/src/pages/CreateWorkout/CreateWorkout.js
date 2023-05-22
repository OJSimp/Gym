import { useState } from "react";
import { NavLink } from "react-router-dom";

// components
import AddWorkoutForm from "../../components/forms/AddWorkoutForms/AddWorkoutForm";

const CreateWorkout = () => {
  return (
    <div className="page">
      <NavLink to="/">Home</NavLink>

      <AddWorkoutForm />
    </div>
  );
};

export default CreateWorkout;
