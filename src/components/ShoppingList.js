import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  let [selectedCategory, setselectedCategory] = useState("all")
  
  function handleSelect(e){
      setselectedCategory(selectedCategory = e.target.value);
      items = items.filter(item => item.category === selectedCategory)
      console.log("item list", items)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;