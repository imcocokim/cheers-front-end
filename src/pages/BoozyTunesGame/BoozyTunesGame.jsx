import React, { useEffect, useState } from "react";
import * as boozyTuneGameService from "../../services/boozyTuneGameService"
import * as boozyTuneService from "../../services/boozyTuneService"
import styles from './BoozyTunesGame.module.css'

function BoozyTunesGame() {
  const [songData, setSongData] = useState();
  const [drinkData, setDrinkData] = useState();
  const [msg, setMsg] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    const boozyTune = await boozyTuneService.addBoozyTune({song:songData._id, pairedDrink:drinkData._id})
    if (boozyTune.author){
      setMsg('The Boozy Has Been Added To Your Profile!')
    } else {
      setMsg('Oh no! Something went wrong!')
    }
  }

  const handleReset = () => {
    setSubmitted(!submitted)
    setMsg()
  }

  useEffect(() => {
    const fetchRandomDrinkAndSong = async () => {
      const res = await boozyTuneGameService.getRandomDrinkAndSong()
      console.log(res)
      setSongData(res.randomSong)
      setDrinkData(res.randomDrink)
    };
    fetchRandomDrinkAndSong();
  }, [submitted]);
  console.log(songData, drinkData)

  const displayRandomPair = () => {
    return (
      <>
        <p>{drinkData?.name} {drinkData?.category}</p><p>{songData?.name} by {songData?.artist}</p>
        <button onClick={handleSubmit}>Create Boozy Tune?</button> 
        <button onClick={handleReset} >Skip</button>
      </>
    )
  }

const displayMsg = () => {
  return(
    <>
      <h2>{msg}</h2>
      <button onClick={handleReset}>Play Again?</button>
    </>
  )
}

  return ( 
    <div className={styles.bzcnt}>
      <h1>Boozy Tunes</h1>
      <h2> Boozy Tunes Results</h2>
      {msg 
        ? displayMsg()
        : displayRandomPair()
      }
    </div>
  )
}

export default BoozyTunesGame;