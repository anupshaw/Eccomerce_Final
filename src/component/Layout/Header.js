import React, { useContext } from "react";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button";
import AuthContext from "../store/auth-Context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
const logoutHandler=()=>{
  authCtx.logout();
}

  return (
    <header className={classes.header}>
      <ul className={classes.headerList}>
        {authCtx.isLoggedIn && (
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <NavLink exact to="/"  activeClassName={classes.active}>
              Store
            </NavLink>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
        )}
        {authCtx.isLoggedIn && (
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Contact
            </NavLink>
          </li>
        )}
      </ul>
      {!authCtx.isLoggedIn && (
        <Link  to="/auth" className={classes.authLogin}>
          Login
        </Link>
      )}
      {authCtx.isLoggedIn && <HeaderButton onConfirmation={props.onShowCart} />}
      {authCtx.isLoggedIn && (
        <Button className={classes.logOutbtn} onClick={logoutHandler}>Logout</Button>
      )}
    </header>
  );
};

export default Header;
