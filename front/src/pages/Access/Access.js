import "./Access.scss";

import { Outlet, Link } from "react-router-dom";

const Access = () => {
  // If loads access link and no

  return (
    <div className="access-page page">
      <Outlet />
    </div>
  );
};

export default Access;
