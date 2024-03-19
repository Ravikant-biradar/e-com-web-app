import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, select , removeitems } from "../Storage/Cartslice";
import "./Apiproduct.css";
import { Link } from 'react-router-dom';

function Apiproduct() {
  const dispatch = useDispatch();
  const removeitems = useDispatch()
  const thingstoadd = useSelector(select);
  console.log(thingstoadd);
  const [apidata, setapidata] = useState([]);
  const [toggle, settoggle] = useState(null);
  const [input, setinput] = useState("");
  const [items, setitems] = useState([]);

  const [err, seterr] = useState(false);
  console.log(apidata);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await (
          await fetch("https://dummyjson.com/products")
        ).json();
        setapidata(data.products);
      } catch (error) {
        seterr(true);
      }
    };
    fetchdata();
  }, []);

  //------------------------ btndesignfunction--------------//

  function btndesignfunction(btnsid) {
    settoggle(btnsid);
  }

  //  filter function
  function filterdata() {
    const filters = apidata.filter((m) => {
      return m.brand.toLowerCase().includes(input.toLowerCase());
    });
    setitems(filters);
  }

  // addtocart fun

  function addtocart(came) {
    dispatch(add(came));
  }

  return (
    <>
      <nav className="navbar navusedinapicompo">
        <input
          onChange={(e) => {
            setinput(e.target.value);
            filterdata();
          }}
          placeholder="searchhere"
          className="serachinput searchinapicompo"
          type="search"
        />

      <Link to='/cart'><div className="cart">{thingstoadd.length}</div></Link>  
      </nav>

      {/*  api fetched are started */}
      <section
        className={`apiprodsection ${input ? "blank" : ""} ${
          input === "" ? "show" : ""
        }`}
      >
        <div className="proddiv">
          {apidata.map((p, id) => (
            <div key={id} className="apidatamaindiv">
              <img className="prodimgs" src={p.images[1]} alt="" />
              <p>{p.brand}</p>
              <p>{p.price}</p>

              <button
                onClick={() => {
                  btndesignfunction(id);
                  addtocart(p);
                }}
                className={`addtocartbtn ${toggle === id ? "act" : ""}`}
              >
                add to cart
              </button>
              <div key={id} className={`act02 ${toggle === id ? "ur" : ""}`}>
                <span className="designedbtn">-</span>
                <span className="designedbtn extraspan">0</span>
                <span className="designedbtn">+</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="proddiv">
        {items.map((value, r) => {
          return (
            <div key={r} className="apidatamaindiv">
              <img
                className="prodimgs"
                src={value.images[1]}
                alt=""
                srcset=""
              />
              <p>{value.brand}</p>
              <p>{value.price}</p>
              <button
                key={r}
                onClick={() => btndesignfunction(r)}
                className={`addtocartbtn ${toggle === r ? "act" : ""}`}
              >
                add to cart
              </button>
              <div key={r} className={`act02 ${toggle === r ? "ur" : ""}`}>
                <span className="designedbtn">-</span>
                <span className="designedbtn extraspan">0</span>
                <span className="designedbtn">+</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Apiproduct;
