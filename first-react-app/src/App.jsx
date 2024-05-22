import Greet from './Greet'
import ListPicker from './Listpickr'
import Conditionals from './conditionals'
import Mapping from './mapping'
import Validate from './excercise1'
import './conditions.css'
import './App.css'

function App() {
  return (
    <>
      {/* <Greet firstName="Aditya" lastname="Rohan"/>
      <ListPicker list={[99,2,3,4,5]}/> */}
      {/* <Conditionals color="red"/> */}
      {/* <Mapping colors={["red","green","blue","red"]}/> */}
      <Validate val1="&" val2="&" val3="&"/>
      <Validate val1="&" val2="&" val3="&"/>
    </>
  )
}

export default App


// Remeber to pass anything except string in the form of {}.....