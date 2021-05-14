import React, { useState } from "react";
import "./AuthenticationForm.css";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { signInUser } from "../../Actions/userActions";
import CircularProgress from "@material-ui/core/CircularProgress";

const AuthForm = () => {
  const [action, setAction] = useState("SIGNIN");
  const [toggle, setToggle] = useState("Register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [actionBtnClicked, setActionBtnClicked] = useState(false);
  const [first_name, setFirst_name] = useState("");
  const [last_name, setlast_name] = useState("");

  const dispatch = useDispatch();

  const toggleAction = () => {
    if (action === "SIGNIN") {
      setAction("REGISTER");
      setToggle("Signin");
    } else {
      setAction("SIGNIN");
      setToggle("Register");
    }
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onFirstNameChange = (event) => {
    setFirst_name(event.target.value);
  };

  const onLastNameChange = (event) => {
    setlast_name(event.target.value);
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const setCookies = (user) => {
    Cookies.set("loggedUser", {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      number: user.number,
    });
  };

  const onActionSignin = (event) => {
    event.preventDefault();
    setActionBtnClicked(true);
    document.getElementById("action-btn").disabled = true;

    fetch("/api/user/", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((_user) => {
        if (_user.email) {
          setCookies(_user);
          dispatch(signInUser(_user));
        } else {
          setActionBtnClicked(false);
          document.getElementById("action-btn").disabled = false;
          alert("Wrong Email or Password");
        }
      })
      .catch(() => {
        document.getElementById("action-btn").disabled = false;
        setActionBtnClicked(false);
        alert("Something went Wrong!");
      });
  };

  const onActionRegister = (event) => {
    event.preventDefault();
    setActionBtnClicked(true);
    document.getElementById("action-btn").disabled = true;

    if (password === confirmPassword) {
      fetch("/api/create-user/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((_user) => {
          if (_user.email) {
            setCookies(_user);
            dispatch(signInUser(_user));
          } else {
            setActionBtnClicked(false);
            document.getElementById("action-btn").disabled = false;
            alert("Email Already Exists !");
          }
        })
        .catch(() => {
          setActionBtnClicked(false);
          document.getElementById("action-btn").disabled = false;
          alert("something went wrong");
        });
    } else {
      alert("password is not the same");
      setConfirmPassword("");
      setActionBtnClicked(false);
      setPassword("");
    }
  };

  return (
    <div className="background">
      <form
        className="form-box  align-form-items"
        onSubmit={action === "SIGNIN" ? onActionSignin : onActionRegister}
      >
        <br />
        <label className="title">MARKETEERS TASK</label>

        {action === "REGISTER" && (
          <div>
            <label style={{ color: "#522424" }}>First Name</label>
            <input
              onChange={onFirstNameChange}
              type="text"
              id="first-name"
              name="name"
              className="input"
              required
            />

            <label style={{ color: "#522424" }}>Last Name</label>
            <input
              onChange={onLastNameChange}
              type="text"
              id="last-name"
              name="name"
              className="input"
              required
            />
          </div>
        )}

        <label style={{ color: "#522424" }}>Email</label>
        <input
          onChange={onEmailChange}
          type="email"
          id="email"
          className="input"
          required
        />

        <label style={{ color: "#522424" }}>Password</label>
        <input
          onChange={onPasswordChange}
          value={password}
          minLength="8"
          type="password"
          className="input"
          style={{ fontSize: "20px" }}
          required
        />

        {action === "REGISTER" && (
          <div>
            <label style={{ color: "#522424" }}>Re-enter Password</label>
            <input
              onChange={onConfirmPasswordChange}
              value={confirmPassword}
              minLength="8"
              type="password"
              className="input"
              style={{ fontSize: "20px" }}
              required
            />
          </div>
        )}

        <button
          id="action-btn"
          className="button"
          type="submit"
          style={{ opacity: actionBtnClicked && "0.6" }}
        >
          {actionBtnClicked
            ? action === "REGISTER"
              ? "REGISTERING..."
              : "SIGNING IN..."
            : action}
        </button>

        {actionBtnClicked ? (
          <CircularProgress
            size="20px"
            disableShrink
            style={{ color: "#ff6600", margin: "10px 0px 0px 0px" }}
          />
        ) : (
          <label className="toggle-btn" onClick={toggleAction}>
            {toggle}
          </label>
        )}
        <br />
      </form>
    </div>
  );
};

export default AuthForm;
