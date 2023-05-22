import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";

import CreateWorkout from "./pages/CreateWorkout/CreateWorkout";

import Access from "./pages/Access/Access";
import SignUp from "./components/forms/AccessForms/SignUp";
import LogIn from "./components/forms/AccessForms/LogIn";
import AddProfileDetails from "./components/forms/ProfileDetailsForms/AddProfileDetails";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<Home />}></Route>

      {/* Access - SignIn / LogIn */}
      <Route path="/access" element={<Access />}>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="log-in" element={<LogIn />}></Route>
        <Route path="profile-details" element={<AddProfileDetails />}></Route>
      </Route>

      {/* Create a workout */}
      <Route path="/create-workout" element={<CreateWorkout />}></Route>

      {/*  */}
    </Routes>
  );
};

export default AppRoutes;
