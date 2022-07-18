const DrinkDropdown = (props) => {
  return ( 
    <select onChange={props.onChange}>
      <option>Select Drink...</option>
      <option disabled>WINE</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Wine" &&
        <option key={idx}>
          {drink.name}
        </option>
      ))} 
      <option disabled>BEER</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Beer" &&
        <option key={idx}>
          {drink.name}
        </option>
      ))} 
      <option disabled>SPIRIT</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Spirit" &&
        <option key={idx}>
          {drink.name}
        </option>
      ))} 
  </select>
  );
}

export default DrinkDropdown;