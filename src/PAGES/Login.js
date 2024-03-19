import React, { useState } from "react";
import "./Login.css";
import { app } from "../Firestoreconfig";
import { useNavigate } from "react-router-dom";
import "./Registration.css";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";


function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [reg, setreg] = useState(false);
  // form sumbmission
  const loginfunc = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setreg(true);
      setTimeout(() => {
        setreg(null);
      }, 5000);
    }
  };

  function loginfunction() {
    navigate("/");
  }

  return (
    <>
      <section style={{ backgroundColor: "#A6D2B7" }} className="registersec">
        <form
          onSubmit={loginfunc}
          style={{ backgroundColor: "white" }}
          className="mainregisterdiv"
        >
          <h1 className="loginbtns">Login</h1>
          

          <input
            required
            name="email"
            onChange={(e) => setemail(e.target.value)}
            type="email"
            value={email}
          />
          <input
            required
            name="password"
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            value={password}
          />

          {reg && <span className="err">you dont have an acoount</span>}
          <button className="lgbtnlast"
            
            type="submit"
          >
            login
          </button>
          <div className="lastreg">
            {/* <h4>already have an account ??</h4> */}
            <h4 style={{position:'relative' }}  className="lgbtnlast" onClick={loginfunction}>
              register here
            </h4>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
