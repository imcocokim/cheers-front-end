import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/songs`

async function searchSongs(artist, song) {
  const path = `${BASE_URL}/search?artist=${artist}&&song=${song}`
  const res = await fetch(path, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export {
  searchSongs
}
