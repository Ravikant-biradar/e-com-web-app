import React from "react";
import { select , removeitems} from "../Storage/Cartslice";
import { useSelector , useDispatch } from "react-redux";
import "./Cart.css";

function Cart() {
  const thingstoadd = useSelector(select);
  const dispatch = useDispatch()

  function removefun(take){
    dispatch(removeitems(take))
  }
  return (
    <>

      <section className="cartsection">
        {thingstoadd.map((cartitem, itemid) => {
          return (
            <div className="cartmaindiv" key={itemid}>
              <img className="cartimg" src={cartitem.images[1]} alt="" />
              <p>{cartitem.brand}</p>
              <p>{cartitem.price}</p>
              {/* <p>{cartitem.description}</p>
              <p>{cartitem.rating}</p> */}

              <button className="cartbtn">proceed to buy</button>
              <button className="remove" onClick={()=>removefun(cartitem)}>remove</button>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Cart;
