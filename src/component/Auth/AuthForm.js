import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../store/auth-Context";
import Button from "../UI/Button";
import classes from "./AuthForm.module.css";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const InputEmailRef = useRef();
  const InputPasswordRef = useRef();

  const submitHandler = async (event) => {
    console.log("submitting form");
    event.preventDefault();
    const enteredEmail = InputEmailRef.current.value;
    const enteredPassword = InputPasswordRef.current.value;
    InputEmailRef.current.value = "";
    InputPasswordRef.current.value = "";
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACWwhQRz6sD3dfeifgbz4FoSI4PjDO4BI";
    }
    try {
      const resp = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!resp.ok) {
        const data = await resp.json();
        let errorMessage = "Authentication failed";
        if (data && data.error && data.error.message) {
          errorMessage = data.error.message;
          throw errorMessage;
        }
      } else {
        const data = await resp.json();
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        if (isLogin) {
          authCtx.login(data.email, data.idToken, expirationTime.toString());
          history.replace("/about");
        } else {
          history.replace("/auth");
        }
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className={classes.auth}>
      <div className={classes.formContainer}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="userEmail">Email</label>
          <input
            id="userEmail"
            type="email"
            ref={InputEmailRef}
            required
            autoFocus
          ></input>
          <label htmlFor="userPassword">Password</label>
          <input
            id="userPassword"
            type="password"
            ref={InputPasswordRef}
            required
          ></input>
          <div className={classes.actions}>
            <Button type="submit" className={classes.btn}>
              {isLogin ? "Login" : "Create Account"}
            </Button>
            <Button
              type="button"
              className={classes.btn}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create Account" : "Login with existing account"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
