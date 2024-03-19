import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  const [num, setnum] = useState(0);
  const [img, setimg] = useState([
    "https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/Travel/Flash_Sale/March/PC-Flight_Hero_3000x1200._CB580335386_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/Hero_3000x12001._CB592142345_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/MFD/Mar/Prime-PC-3000._CB580118080_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Deeksha/PC_3000x1200_G._CB580095182_.jpg",
  ]);

  // slider function.....
  function right() {
    // setnum((num+1 ) % (img.length))
    setnum((prev) => {
      return prev === img.length - 1 ? 0 : prev + 1;
    });
  }

  function left() {
    setnum(num === 0 ? img.length - 1 : num - 1);
  }
  //  longslider function not to get confused
  function longsliderright() {
    // setnum((num+1 ) % (img.length))
    setnum((prev) => {
      return prev === img.length - 1 ? 0 : prev + 1;
    });
  }

  function longsliderleft() {
    setnum(num === 0 ? img.length - 1 : num - 1);
  }
  return (
    <>
      <nav className="navbar">
        <h1 className="logo">
          BLINK <span className="logospan">IT..</span>
        </h1>
        <input placeholder="searchhere" className="serachinput" type="search" />
        <div className="backendname">name</div>
        <div className="cart">cart</div>
      </nav>
      {/* img  slidebar section */}
      <section className="imgslider">
        <div onClick={left} className="sliderbtn ">
          {"<<"}
        </div>
        <img className="sliderimgs" src={img[num]} alt="" />
        <div onClick={right} className="sliderbtn right">
          {">>"}
        </div>
      </section>

      {/* {  4**4 product details with active  link } */}

      <section className="productsec">
        <div className="productdetaildiv">
          <Link to="/apiproducts">
            <img
              style={{
                objectFit: "cover",
                height: "80px",
                width: "125px",
                borderRadius: "10px",
              }}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Mar/4th/Combo_high_res_2_1_1_1._SY608_CB580012468_.jpg"
              alt=""
            />
            <h3>see all products</h3>
          </Link>
        </div>
        <div className="productdetaildiv">
          <Link to="/apiproduct02">
            <img
              style={{
                objectFit: "cover",
                height: "80px",
                width: "125px",
                borderRadius: "10px",
              }}
              src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/BAU/HFpage/6_Shop-by-cat-700x700.jpg"
              alt=""
            />
            <h3>see all products </h3>
          </Link>
        </div>
        <div className="productdetaildiv">
          <Link to="">
            <img
              style={{
                objectFit: "cover",
                height: "80px",
                width: "125px",
                borderRadius: "10px",
              }}
              src="https://m.media-amazon.com/images/I/51DKHNjN7WS._AC_UF452,452_FMjpg_.jpg"
              alt=""
            />
            <h3>see all products </h3>
          </Link>
        </div>
        <div className="productdetaildiv">
          <Link to="">
            <img
              style={{
                objectFit: "cover",
                height: "80px",
                width: "125px",
                borderRadius: "10px",
              }}
              src="https://m.media-amazon.com/images/I/91WCVtSmrwL._AC_UF452,452_FMjpg_.jpg"
              alt=""
            />
            <h3>see all products </h3>
          </Link>
        </div>
      </section>
      {/* ------------------------- watch slidebar starts here-------------- */}
      <section className="longslidebar ">
        <div onClick={longsliderleft} className="longsliderleft">
          {"<<"}
        </div>

        <div className="longsliderimgs">
          <img
            style={{ height: "14vh", width: "75vw", paddingTop: "01vh" }}
            src={img[num]}
            alt=""
          />
        </div>
        <div onClick={longsliderright} className="longsliderright">
          {">>"}
        </div>
      </section>
      {/*------------------------------ footer starts here----------------  */}
      <footer className="footer">
        <div className="mainfooterdiv">
          <div className="footerdiv">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            </p>
          </div>
          <div className="footerdiv">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            </p>
          </div>
          <div className="footerdiv">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            </p>
          </div>
          <div className="footerdiv">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
            </p>
          </div>
        </div>

        <div className="email">
          <input placeholder="email" className="message" type="text" />
          <input placeholder="number" className="message" type="text" />
          <input className="message last" type="text" />
        </div>
        <div className="love">made with love @ravikant s biradar</div>
        <div className="icons">
          <h1>🆙</h1>
          <h1>😶‍🌫️</h1>
          <h1>🎁</h1>
          <h1>🏧</h1>
        </div>
      </footer>
    </>
  );
}

export default Home;
//'https://m.media-amazon.com/images/I/51LfzsMZAWL._AC_SY340_.jpg'+
//https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2024/GW_Mar/4th/Combo_high_res_2_1_1_1._SY608_CB580012468_.jpg
