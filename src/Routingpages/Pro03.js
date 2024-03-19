import React, { useEffect, useState } from "react";
import "./Pro02.css";

function Pro03() {
  const [data, setdata] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await fetch("https://fakestoreapi.com/products")
          .then((data) => {
            return data.json();
          })
          .then((realdata) => {
            console.log(realdata);
            setdata(realdata);
          });
      } catch (error) {}
    };
    fetchdata();
  }, []);
  return (
    <>
      <section className="pro02">
        {data.map((p , id) => (
          <div className="pro02apimaindiv">
            <div className="pro02mainimgdiv">
              <img className="pro02apiimgs" src={p.image} alt="" />
            </div>
          
            <div className="pro02title"><p> mens wear{` ${id}`}</p></div>
            <button className="pro01btn">add to cart</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Pro03;
