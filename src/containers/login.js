//@flow
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { authenticate } from "../services/loginService";
import { selectLoadingUser } from "../slices/loginSlice";

export const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const dispatch = useDispatch();

  const loadingUser = useSelector(selectLoadingUser);

  const onLoginClick = () => {
    dispatch(
      authenticate({
        email: email,
        password: pass,
      })
    );
  };

  if (loadingUser) {
    return <Loader />;
  }

  return (
    <div>
      <input name="email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input name="password" onChange={(e) => setPass(e.target.value)} />
      <br />
      <button text="Login" onClick={onLoginClick}>
        loggin
      </button>
    </div>
  );
};
