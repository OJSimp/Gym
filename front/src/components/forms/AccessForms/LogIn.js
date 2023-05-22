import "./LogIn.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import TextInput from "../../inputs/TextInput";
//Hooks
import { useLogIn } from "../../../hooks/useLogin";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogIn();

  // Log in User
  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log(email, password);

    await login(email, password, error);
  };

  return (
    <div className="pg-ctr">
      <header className="txt-ctr pad-btm">
        <h1>Welcome back</h1>
        <p>Please sign in to your account.</p>
      </header>
      <form className="form--access" onSubmit={handleLogIn}>
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

        <button className="btn-primary">Log In</button>
      </form>

      <div className="pad-btm pad-top">
        <p className="txt-ctr">
          Don't have an account? <NavLink to="/access/sign-up">Sign up</NavLink>
        </p>
      </div>

      <div>
        <button className="btn-outline">Continue with Facebook</button>
        <button className="btn-outline">Continue with Google</button>
      </div>
    </div>
  );
};

export default LogIn;
