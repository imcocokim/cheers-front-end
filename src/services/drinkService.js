const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/drinks`

async function getAllDrinks() {
  const res = await fetch(BASE_URL)
  return res.json()
}

export {
  getAllDrinks
}
