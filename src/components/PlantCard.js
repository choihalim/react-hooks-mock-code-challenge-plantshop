import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant, updatePrice }) {
  const [inStock, setInStock] = useState(true);
  const [updatedPrice, setUpdatedPrice] = useState(0);

  function onUpdatedPrice() {
    updatePrice(plant, updatedPrice);
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <input
        type="number"
        name="updatedPrice"
        placeholder="Enter an updated price..."
        value={updatedPrice || ""}
        onChange={(e) => setUpdatedPrice(e.target.value)}
      >

      </input>
      {inStock ? (
        <button onClick={() => setInStock(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(true)}>Out of Stock</button>
      )}
      <button onClick={onUpdatedPrice}>Update Price</button>
      <button
        style={{ backgroundColor: "red", color: "white" }}
        onClick={() => onDeletePlant(plant)}
      >
        Delete</button>
    </li>
  );
}

export default PlantCard;
