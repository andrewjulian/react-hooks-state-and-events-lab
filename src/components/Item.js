import React, {useState} from "react"

function Item({ name, category }) {

  let [add, setAdd] = useState()
  const appClass = add ? "in-cart" : ""
  const itemStatus = add? "Remove From Cart" : "Add to Cart"

  function addToCart(){
    setAdd((add)=> add = !add )
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={appClass} onClick={addToCart}>{itemStatus}</button>
    </li>
  );
}

export default Item;
