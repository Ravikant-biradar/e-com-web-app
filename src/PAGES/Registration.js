import React, { useState } from "react";
import { useContext } from "react";
import { authcontext } from "../Context";
import { app } from "../Firestoreconfig";
import { Form, useNavigate } from "react-router-dom";
import "./Registration.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  Timestamp,
  getFirestore,
  setDoc,
  doc,
  collection,
} from "firebase/firestore";

function Registration() {
  const { value } = useContext(authcontext);
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [file, setfile] = useState("");
  const [err, seterr] = useState(false);
  // form sumbmission
  const formsubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);
    const db = getFirestore(app);
    const auth = getAuth(app);

    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (add) => {
          await setDoc(doc(db, "users", add.user.uid), {
            name: name,
            email: email,
            createdAt: Timestamp.fromDate(new Date()),
            isOnline: true,
            uid: add.user.uid,
            file: file,
          });
        }
      );
      navigate("/home");
      // const adddatatodb = await setDoc(doc(db, "users", add.user.uid), {
      //   name: name,
      //   email: email,
      //   createdAt: Timestamp.fromDate(new Date()),
      //   isOnline: true,
      //   uid: add.user.uid,
      // });
    } catch (error) {
      seterr(true);
    }
  };

  function loginfunction() {
    navigate("/loginpage");
  }

  return (
    <>
      <section className="registersec">
        <Form onSubmit={formsubmit} className="mainregisterdiv">
          <h1>REGISTER HERE</h1>

          <input
            required
            placeholder="name"
            name="name"
            onChange={(e) => setname(e.target.value)}
            type="name"
            value={name}
          />
          <input
            required
            placeholder="email"
            name="email"
            onChange={(e) => setemail(e.target.value)}
            type="email"
            value={email}
          />
          <input
            required
            placeholder="password"
            name="password"
            onChange={(e) => setpassword(e.target.value)}
            type="password"
            value={password}
          />
        

          {err && <span className="err">something went wrong</span>}
          <button className="subbtn" type="submit">
            SUBMIT..
          </button>
          <div className="lastreg">
            <h4>already have an account ??</h4>
            <h4
              style={{ borderBottom: "1px solid black" }}
              className="loginbtn"
              onClick={loginfunction}
            >
              login
            </h4>
          </div>
        </Form>
      </section>
    </>
  );
}

export default Registration;
