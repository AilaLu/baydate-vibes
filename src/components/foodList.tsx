import React from "react";
import { useParams } from "react-router-dom";
import { foodPlaces } from "../data/foodPlaces";

const FoodList = () => {
  const { type } = useParams(); // e.g., /food/sushi
  console.log("type from URL:", type);
console.log("available keys:", Object.keys(foodPlaces));
console.log("places:", foodPlaces[type ?? ""]);


  const places = foodPlaces[type ?? ""] ?? [];

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Top {type?.toUpperCase()} Places Near You 🍽️
      </h1>

      {places.length === 0 ? (
        <p>No data found for this food type.</p>
      ) : (
        <ul className="space-y-4">
          {places.map((place) => (
            <li
              key={place.name}
              className="border rounded-xl p-4 shadow bg-white dark:bg-gray-800"
            >
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p>{place.address}</p>
              <p>⭐ {place.rating} stars</p>
              <div>
               <p>⏰ Opening hours:</p>
               <ul className="text-sm text-gray-600">
                 {Object.entries(place.hours).map(([day, time]) => (
                   <li key={day}>
                     <strong>{day}:</strong> {time}
                   </li>
                 ))}
               </ul>
             </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FoodList;
