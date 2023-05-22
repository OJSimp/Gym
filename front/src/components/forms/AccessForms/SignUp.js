import "./SignUp.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import TextInput from "../../inputs/TextInput";

//Hooks
import { useSignUp } from "../../../hooks/useSignUp";

const SignUp = () => {
  // Store details of user
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form navigation
  const [formNav, setFormNav] = useState(0);

  // Hooks
  const { signup, error, loading } = useSignUp();

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(email, password);

    await signup(email, password);
  };

  return (
    <div>
      <header className="txt-ctr pad-btm">
        <h1>Create an account</h1>
        <p>
          With an account you can store, access and track your workouts from any
          device.
        </p>
      </header>
      <div className="form--access">
        <form onSubmit={handleSignUp}>
          {/* First Name Input */}
          <TextInput
            id="first-name"
            type="text"
            label="First name"
            error="error message"
            setInputValue={(value) => setFirstName(value)}
          />

          {/* Last Name Input */}
          <TextInput
            id="last-name"
            type="text"
            label="Last name"
            error="error message"
            setInputValue={(value) => setLastName(value)}
          />

          {/* Email Input */}
          <TextInput
            id="email"
            type="text"
            label="Email address"
            error="error message"
            setInputValue={(value) => setEmail(value)}
          />

          {/* Password Input */}
          <TextInput
            id="password"
            type="password"
            label="Password"
            error="error message"
            setInputValue={(value) => setPassword(value)}
          />

          <button className="btn-primary">Continue</button>
        </form>
      </div>

      <div className="pad-btm pad-top">
        <p className="txt-ctr">
          Already have an account? <NavLink to="/access/log-in">Log in</NavLink>
        </p>
      </div>

      <div>
        <button className="btn-outline">Continue with Facebook</button>
        <button className="btn-outline">Continue with Google</button>
      </div>
    </div>
  );
};

export default SignUp;
