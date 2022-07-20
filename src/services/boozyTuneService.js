import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/boozyTunes`

async function addBoozyTune(boozyTune) {
  console.log('SONG DATA', boozyTune)
  console.log(boozyTune)
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(boozyTune)
  })
  return await res.json()
}

export {
  addBoozyTune
}