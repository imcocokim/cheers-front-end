const DrinkDropdown = (props) => {
  return ( 
    <select onChange={props.onChange}>
      <option disabled selected>Select Drink...</option>
      <option disabled>Wine</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Wine" &&
        <option key={idx}>
          {drink.name}
        </option>
      ))} 
      <option disabled>Beer</option>
      {props.drinks.map((drink, idx) => (
        drink.category === "Beer" &&
        <option key={idx}>
          {drink.name}
        </option>
      ))} 
      <option disabled>Spirit</option>
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