

const MyTastes = (props) => {
  const tastes = [...new Set(props.drinks.map(
    (drink) => drink.category
  ))]
  return ( 
    <select onChange={(e) => props.setDrinkCategory(e.target.value)}>
    {tastes.map((taste,idx) => (
      <option key={idx} value={taste}>
        {taste}
      </option>
    ))}
  </select>
  );
}
 
export default MyTastes;