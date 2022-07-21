import React, { useEffect, useState } from "react";
import * as boozyTuneGameService from "../../services/boozyTuneGameService"


function BoozyTunesGame() {

  useEffect(() => {
    const fetchRandomDrinkAndSong = async () => {
      const res = await boozyTuneGameService.getRandomDrinkAndSong()
      console.log(res)
    };
    fetchRandomDrinkAndSong();
  }, []);


  return ( 
    <>
    <h1>Boozy Tunes</h1>
    <h2> Boozy Tunes Results</h2>
    <h3> 60% of users said YES, THIS SONG goes with THIS DRINK</h3>
    <p>This list of drinks</p>
    <button>Continue</button> <br></br><button>Cancel</button>
    </>
   )
}

  export default BoozyTunesGame;