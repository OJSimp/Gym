import "./FormNav.scss";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const FormNav = (props) => {
  return (
    <>
      <div className="form__nav">
        {props.isFirstStep ? (
          <div></div>
        ) : (
          <div onClick={props.back} className="btn-icon btn-icon--left">
            <BsArrowLeft className="icon--button" />
          </div>
        )}
        <div className="form__nav--progress">
          <span>{props.current}</span>/<span>{props.total}</span>
        </div>
        {!props.isLastStep && (
          <div onClick={props.next} className="btn-icon btn-icon--right">
            <BsArrowRight className="icon--button" />
          </div>
        )}
      </div>
    </>
  );
};

export default FormNav;
