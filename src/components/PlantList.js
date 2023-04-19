import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDeletePlant, updatePrice }) {
  const renderPlants = plants.map(plant =>
    <PlantCard 
      key={plant.id}
      plant={plant}
      onDeletePlant={onDeletePlant}
      updatePrice={updatePrice}
    >
    </PlantCard>
  );
  return (
    <ul className="cards">{renderPlants}</ul>
  );
}

export default PlantList;
