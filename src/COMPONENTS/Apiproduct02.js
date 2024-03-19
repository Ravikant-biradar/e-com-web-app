import React, { useState } from "react";
import "./Apiproduct02.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function Apiproduct02() {
  const [classlist, setclasslist] = useState(true);
  const [btnid, setbtnid] = useState(null);

  function btndesign() {
    setbtnid(true);
  }
  return (
    <>
      <section className="mainsection">
        {/*  left router starts here  */}
        <div className="leftdiv">
          <NavLink
            activeClssName="active"
            style={{ textDecoration: "none" }}
            to="pro01"
          >
            <div style={{ color: "black" }} className={`leftproductsdetails`}>
              Shirts && pants
            </div>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="pro02">
            <div style={{ color: "black" }} className={`leftproductsdetails`}>
              {" "}
              Mobile && Laptops
            </div>
          </NavLink>
          <NavLink
            activeClssName="active"
            style={{ textDecoration: "none" }}
            to="pro03"
          >
            <div style={{ color: "black" }} className={`leftproductsdetails`}>
              Gold && Silver
            </div>
          </NavLink>
          <NavLink
            activeClssName="active"
            style={{ textDecoration: "none" }}
            to="pro04"
          >
            <div style={{ color: "black" }} className={`leftproductsdetails`}>
              Shoes && Sandals
            </div>
          </NavLink>
          <NavLink
            activeClssName="active"
            style={{ textDecoration: "none" }}
            to="pro05"
          >
            <div style={{ color: "black" }} className={`leftproductsdetails`}>
              Rings && Bangles
            </div>
          </NavLink>
        </div>
        {/*  right router starts here  */}
        <div className="rightdiv">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Apiproduct02;
