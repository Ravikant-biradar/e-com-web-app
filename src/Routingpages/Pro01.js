import React, { useEffect, useState } from "react";
import "./Pro02.css";

function Pro01() {
  const [data, setdata] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const api = await fetch("https://fakestoreapi.com/products/categories")
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
        {data.map((p, id) => (
          <div className="pro02apimaindiv">
            <div className="pro02mainimgdiv">
              <img className="pro02apiimgs" src={p.image} alt="" />
            </div>

            <div className="pro02title">
              <p> mens wear{` ${id}`}</p>
            </div>
            <button className="pro01btn">add to cart</button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Pro01;

//    'https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/TVs/Manish/BAU/MARCH/low/high/65._SY232_CB580541707_.jpg'
