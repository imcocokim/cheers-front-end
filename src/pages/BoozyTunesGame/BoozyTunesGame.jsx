import React, { useEffect, useState } from "react";
// import * as pollService from "../../services/pollService";
// import { drinks } from "../../data/drink-data"
import * as drinkService from "../../services/drinkService"


function BoozyTunesGame() {
  const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}`
  const [songData, setSongData] = useState([]);
  const [drinkData, setDrinkData] = useState([]);
  
  useEffect(() => {
    
    const fetchDrinkData = async () => {
      const response = await fetch (`${BASE_URL}/api/drinks`);
      const newDrinkData = await response.json();
      setDrinkData(newDrinkData)
    };
    const fetchSongData = async () => {
      const response = await fetch (`${BASE_URL}/api/songs`);
      const newSongData =  await response.json();
      setSongData(newSongData)
    }
    fetchDrinkData();
    fetchSongData();
  }, []);

console.log(songData)
console.log(drinkData)

  return ( 
    <>
    <h1>Boozy Tunes</h1>
    <h2> Boozy Tunes Results</h2>
    <h3> 60% of users said YES, THIS SONG goes with THIS DRINK</h3>
    <p>This list of drinks</p>
    {drinkData?.map(drink => 
      
         <p>{drink.name}</p>
      

      )}
    {songData?.map(songs => 
      
         <p>{songs.name}</p>
      

      )}
      



    <button>Continue</button> <br></br><button>Cancel</button>

    <form action= "submit" method="POST">
    <select name="drink">
      {/* <input type="radio" id="dewey" name="drone" value="dewey">
<option value={drink.name}>{drink.name}</option>



</input> */}
      {drinkData?.map(drink => 
<h1>What drink best fits this song</h1>


   

   )}


      {/* <option value={song.name}>No</option> */}

      
    </select>

    </form>
    </>
   )
}
 
  export default BoozyTunesGame;
