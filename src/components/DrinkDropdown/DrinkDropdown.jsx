const DrinkDropdown = (props) => {
  return ( 
    props.drinks.length &&
    <select onChange={props.onChange} name="favoriteDrink">
      <option></option>
      <option disabled>WINE</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Wine" &&
        <option key={idx} value={drink._id}>
          {drink.name} {drink.category}
        </option>
      ))} 
      <option disabled>BEER</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Beer" &&
        <option key={idx} value={drink._id}>
          {drink.name} {drink.category}
        </option>
      ))} 
      <option disabled>SPIRIT</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Spirit" &&
        <option key={idx} value={drink._id}>
          {drink.name} {drink.category}
        </option>
      ))} 
  </select>
  );
}

export default DrinkDropdown;