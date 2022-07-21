import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/boozyTuneGame`

async function getRandomDrinkAndSong() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, },
  })
  return await res.json()
}

export {
  getRandomDrinkAndSong
}