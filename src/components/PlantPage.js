import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [plantSearch, setPlantSearch] = useState("");

  const plantsURL = "http://localhost:6001/plants/"

  function fetchPlants() {
    fetch(plantsURL)
      .then(res => res.json())
      .then(setPlants)
  }

  function updatePrice(updatedPricePlant, updatedPrice) {
    fetch(`${plantsURL}${updatedPricePlant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "price": Number(updatedPrice) })
    })
      .then(res => res.json())
      .then(updatedPlant => {
        const updatedPlants = plants.map(plant =>
          plant.id === updatedPlant.id ? updatedPlant : plant
        );
        setPlants(updatedPlants);
      });
  }

  function onDeletePlant(deletedPlant) {
    fetch(`${plantsURL}${deletedPlant.id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(setPlants(plants.filter(plant => plant !== deletedPlant)))
  }

  function onPlantSearch(search) {
    setPlantSearch(search)
  }

  function onNewFormSubmit(newPlant) {
    fetch(plantsURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then(res => res.json())
      .then(setPlants([...plants, newPlant]))
  }

  useEffect(fetchPlants, []);

  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(plantSearch.toLowerCase()))

  return (
    <main>
      <NewPlantForm onNewFormSubmit={onNewFormSubmit} />
      <Search plantSearch={plantSearch} onPlantSearch={onPlantSearch} />
      <PlantList
        plants={plantSearch === "" ? plants : filteredPlants}
        onDeletePlant={onDeletePlant}
        updatePrice={updatePrice}
      />
    </main>
  );
}

export default PlantPage;
