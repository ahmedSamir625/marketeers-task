import React, { useState, useEffect } from "react";
import "./App.css";
import AuthForm from "./Containers/AuthForm/AuthenticationForm";
import MainPage from "./Containers/MainPage/MainPage";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "./Actions/userActions";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedUserCookies = Cookies.getJSON("loggedUser");
    if (loggedUserCookies) {
      dispatch(signInUser(loggedUserCookies));
    }
    setloading(false);
  }, [dispatch]);

  const { user } = useSelector((state) => state.loggedUser);

  return (
    <div className="App">
      {loading ? "" : user.email ? <MainPage /> : <AuthForm />}
    </div>
  );
}

export default App;
