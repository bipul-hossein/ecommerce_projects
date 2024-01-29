import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div>
        <h1>Uh oh, something went terribly wrong 😩</h1>
        {/* <pre>{error.message || JSON.stringify(error)}</pre> */}
        <button onClick={() => (window.location.href = "/")}>
          Click here to reload the app
        </button>
        <h4 className="text-3xl">
          {" "}
          Please <button onClick={handleLogOut}>Sign out</button> and log back
          in
        </h4>
      </div>
  );
};

export default DisplayError;
