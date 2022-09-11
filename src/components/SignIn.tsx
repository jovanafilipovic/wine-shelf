import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
// import { useDispatch, useSelector } from "react-redux/es/exports";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  const navigate = useNavigate();
  /*loginUser = (event: any) => {
    //prvo moramo uzeti sve registrovane usere
    const users = useSelector((state) => state.users);

    //iz postojece liste registrovanih pronalazimo usera ciji se kredencijali poklapaju(vrsimo validaciju)
    const payload = users.find(
      (user) => user.email === email && user.password === password
    );
    if (payload) {
      dispatch({
        type: "Login",
        payload
      })
      else{
        alert("Wrong credentials")
      }
    }
  };*/

  const handleLogin = (e) => {
    // Ovim cemo prvo spreciti da se stranica refresh nakon klika na dugme
    e.preventDefault();

    const user = { email, password };
    console.log(user);
  };
  return (
    <div className="signin-page">
      <form onSubmit={handleLogin}>
        {" "}
        {/* onSubmit={loginUser} */}{" "}
        {/*ovako je bolje jer cemo moci da se ulogujemo klikom na enter */}
        <div>
          <h2 className="heading-signin">Sign in</h2>
          <div className="form-group-signin">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group-signin">
            <label htmlFor="pasword">Password:</label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <input
            className="submit-button"
            type="submit"
            value="Sign in"
            /*onClick={() => {
              navigate("/");   OVO OVDE MI PRAVI PROBLEM ZA REQUIRED FIELDS
            }}*/
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
