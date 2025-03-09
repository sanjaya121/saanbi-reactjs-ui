import { useState } from "react";

const Login = () => {
  //   const [user, setUser] = useState({});

  return (
    <div className="login-container m-10">
      <h1>Login Page</h1>
      <form>
        <div className="input-container">
          <label>User Name</label>
          <input type="email" className="user-name" id="userName" />
        </div>
      </form>
    </div>
  );
};

export default Login;
