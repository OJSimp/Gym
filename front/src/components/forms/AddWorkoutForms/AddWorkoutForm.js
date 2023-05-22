import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import TextInput from "../../inputs/TextInput";
import CreateAWorkoutForm from "./CreateAWorkoutForm";
import AddExercisesFrom from "./AddExercisesForm";
import FormNav from "../../navigation/FormNav";

// hooks
import { useMultistepForm } from "../../../hooks/useMultistepFrom.ts";

const AddWorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");

  // Form navigation between steps
  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<CreateAWorkoutForm />, <AddExercisesFrom />]);

  // Form navigation
  const [formNav, setFormNav] = useState(0);

  const handleCreateWorkout = (e) => {
    e.preventDefault();
    setFormNav(1);
  };

  return (
    <>
      {step}

      <FormNav
        current={currentStepIndex + 1}
        total={steps.length}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        back={back}
        next={next}
      />
    </>
  );
};

export default AddWorkoutForm;
