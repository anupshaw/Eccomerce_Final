import React, { useCallback, useState } from "react";
let logoutTimer;
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingDuration = adjExpirationTime - currentTime;
  console.log('remainingDuration',remainingDuration);
  return remainingDuration;

};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationTime);
  if (remainingTime <= 0) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};
export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let InitialToken;
  if (tokenData) {
    InitialToken = tokenData.token;
  }
  const [token, setToken] = useState(InitialToken);

  const userIsLoggedIn = !!token;

  const logoutHander = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("email");

    if(logoutTimer)
    {
      clearTimeout(logoutTimer);
    }
  }, []);



  const loginHander = (email,token,expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    localStorage.setItem("email", email);
    console.log(token,expirationTime)
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHander, remainingTime);
  };


  // useEffect(() => {
  //   if (tokenData) {
  //     logoutTimer = setTimeout(logoutHander, tokenData.duration);
  //   }
  // }, [tokenData, logoutHander]);
 

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHander,
    logout: logoutHander,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
