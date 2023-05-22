import "./AddProfileDetails.scss";

// Form Components
import FormNav from "../../navigation/FormNav";
import AddUserDOB from "./AddUserDOB";
import AddUserCompostion from "./AddUserCompostion";
import AddUserGoals from "./AddUserGoals";

// hooks
import { useMultistepForm } from "../../../hooks/useMultistepFrom.ts";

const AddProfileDetails = () => {
  // Form navigation between steps
  const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
    useMultistepForm([<AddUserDOB />, <AddUserCompostion />, <AddUserGoals />]);

  return (
    <div className="form__add-profile-details">
      {step}
      <FormNav
        current={currentStepIndex + 1}
        total={steps.length}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        back={back}
        next={next}
      />
    </div>
  );
};

export default AddProfileDetails;
