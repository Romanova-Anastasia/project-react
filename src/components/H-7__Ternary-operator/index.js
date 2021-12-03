import React, { useState } from "react";

const Login = () => {
  const [isSignedIn, setSignedIn] = useState("false");

  const loginIn = () => {
    setSignedIn(!isSignedIn);
  };

  const onClickButton = () => {
    setTimeout(loginIn, 3000);
  };

  return (
    <div>
      {!isSignedIn ? (
        <p> Hello user</p>
      ) : (
        <button onClick={onClickButton}>Sing In</button>
      )}
    </div>
  );
};

export default Login;
