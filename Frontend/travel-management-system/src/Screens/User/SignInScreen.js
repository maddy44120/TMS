import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../Actions/UserActions";
import Header from "../../Components/Header";

const SignInScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  let navigate = useNavigate()

  const { loading, response, error } = useSelector((store) => store.userSignin);
  console.log('--------------- ', loading, response, error);

  const onSignIn = () => {
    dispatch(signin(email, password));
   console.log('unser signin '+ email, password);
  };

  useEffect(() => {
    console.log('--------------- ',response);
    console.log('user effect'+JSON.stringify(response));
    if (response && response.status ===200) {
      sessionStorage.setItem("Authorization", "Bearer " + response.token);
      if (response.data.role === "ADMIN") {
        navigate("/admin-home");
      } else if (response.data.role === "EMPLOYEE") {
        navigate("/employee-home");
      } else if (response.data.role === "USER") {
        navigate('/user-home')
      } 
    }
  }, [loading, response, error, props.history]);

  return (
    <div className="Screen">
      <Header title="Login" />
      {error && error.status === "error" && (
        <h5 className="text-danger text-center">{error.message}</h5>
      )}
      <div className="mb-3">
        <label className="form-label">Email Address</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="form-control"
          placeholder="abc@example.com"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          className="form-control"
          placeholder="*******"
        />
      </div>

      <div className="float-end">
          <br/>
          New around here? <Link to="/signup">Sign Up</Link>
      </div>

      <div className="mb-3">
        <button onClick={onSignIn} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

export default SignInScreen;
