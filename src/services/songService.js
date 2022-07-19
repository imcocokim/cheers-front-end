import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/songs`

async function searchSongs(artist, song) {
  const path = `${BASE_URL}?artist=${artist}&&song=${song}`
  const res = await fetch(path, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addBoozyTune(song) {
  console.log('SONG DATA', song)
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    body: song.data
  })
  return await res.json()
}

export {
  searchSongs,
  addBoozyTune
}
