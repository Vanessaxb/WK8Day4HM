import { useEffect, useState } from "react";
import StarshipListItem from "./StarshipListItem";

function StarshipList() {
  const [starships, setStarships] = useState([]);
  // Without the array of dependencies the use will run every time the mounts or re-render.

  // With an empty array it will run only when the component mounts the first time.

  useEffect(() => {
    console.log("Inside the useEffect");

    const fetchData = async () => {
      try {
        // return a response object
        const res = await fetch("https://swapi.dev/api/starships/");
        const data = await res.json(); // parsing the raw data
        console.log(data);
        setStarships(data.results); // setting the data to the starships state variable
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("STARSHIPS", starships);
  const starshipElements = starships ? (
    starships.map((ships) => 
      <div key={ships.name} className="starships" >
        <h3>Name: {ships.name}</h3>
        <h4>Model: {ships.model} </h4>

      </div>
      ) 
      // const starshipElements = starships ? (starships.map((starships) => (<h3 key={starships.name} className="starships"> {starships.name}</h3>)) 
  ) : (
      <h3>Loading...</h3>
  );
  
  return (
    <div>
     
      <div className="cards">{starshipElements}</div>
     
      {/* <>
        {starships ? (
          starships.map((starships) => <StarshipListItem  starships={starships} key={starships.model}/>)
        ) : (
          <h3>Loading!!!!</h3>
        )}
      </> */}
    </div>
  );
}

export default StarshipList;