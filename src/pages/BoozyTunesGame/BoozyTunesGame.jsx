import React, { useEffect, useState } from "react";
import * as boozyTuneGameService from "../../services/boozyTuneGameService"


function BoozyTunesGame() {
  const [songData, setSongData] = useState();
  const [drinkData, setDrinkData] = useState();


  useEffect(() => {
    const fetchRandomDrinkAndSong = async () => {
      const res = await boozyTuneGameService.getRandomDrinkAndSong()
      console.log(res)
      // console.log(res.randomSong)
      // console.log(res.randomDrink)
      
      setSongData(res.randomSong)
      setDrinkData(res.randomDrink)
    };
    fetchRandomDrinkAndSong();
  }, []);
  console.log(songData, drinkData)

return ( 
  <>
  <h1>Boozy Tunes</h1>
  <h2> Boozy Tunes Results</h2>
  <h3> 60% of users said YES, THIS SONG goes with THIS DRINK</h3>
  <p>This list of drinks</p>
       <p>{drinkData?.name}</p>    
       <p>{songData?.name}</p>
       </>
)
  }

  export default BoozyTunesGame;