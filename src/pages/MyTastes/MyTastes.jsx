import DrinkDropdown from "../../components/DrinkDropdown/DrinkDropdown";

const MyTastes = (props) => {
  return ( 
    <>
      <DrinkDropdown drinks={props.drinks}/>
    </>
  )
}

export default MyTastes;