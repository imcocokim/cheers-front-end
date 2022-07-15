import drinks from "../../../data/drink-data";

const MyTastes = (props) => {
  const tastes = [...new Set(props.drinks.map(
    (drink) => drink.taste
  ))]
  return ( 
  <>
    <h1>My Tastes</h1>
    <p>Dropdown Here</p>
    <p>Tunes paired with Tastes cards Here</p>
  </> 
  );
}
 
export default MyTastes;