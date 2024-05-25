import Greet from './Greet'
import ListPicker from './Listpickr'
import Conditionals from './conditionals'
import Mapping from './mapping'
import Validate from './excercise1'
import ShoppingList from './ShoppingList'
import RentalProperty from './RentalProperty'
import './conditions.css'
import Clicker from './Clicker'
import './App.css'

// const data = [
//   {id:1,item:"eggs",quantity:12,completed:false},
//   {id:2,item:"milk",quantity:2,completed:true},
//   {id:3,item:"chicken breasts",quantity:4,completed:false},
//   {id:4,item:"carrots",quantity:6,completed:true},
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <>
      {/* <Greet firstName="Aditya" lastname="Rohan"/>
      <ListPicker list={[99,2,3,4,5]}/> */}
      {/* <Conditionals color="red"/> */}
      {/* <Mapping colors={["red","green","blue","red"]}/> */}
      {/* <Validate val1="&" val2="&" val3="&"/>
      <Validate val1="&" val2="&" val3="&"/> */}
      {/* <ShoppingList items={data}/> */}
      {/* <RentalProperty properties={properties}/> */}
      <Clicker num={2}/>
    </>
  )
}

export default App


// Remeber to pass anything except string in the form of {}.....