import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/songs`

async function searchSongs(artist, song) {
  const path = `${BASE_URL}/search?artist=${artist}&&song=${song}`
  const res = await fetch(path, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function getAllSongs() {
  const res = await fetch(BASE_URL)
  return res.json()
}

async function addSong(song) {
  console.log('SONG DATA', song)
  const obj = {img: song.strTrackThumb, name: song.strTrack, artist: song.strArtist, genre: song.strGenre}
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(obj)
  })
  return await res.json()
}

export {
  searchSongs,
  getAllSongs,
  addSong
}
