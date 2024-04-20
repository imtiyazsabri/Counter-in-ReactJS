
import { useState } from 'react'
import './App.css'

function App() {

  const[counter, setCounter] = useState(0);

  let AddVal = () => {
    if(counter < 25){
      setCounter(counter + 1)
    }
  }

  let RemoveVal = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }


  return (
    <>
    <h1 className='bg-white rounded-md p-4 font-bold text-4xl'>Counter</h1>

    <br /> <br />

    <h2 className='bg-white p-2 text-xl font-medium rounded-md'>
      ON EVERY CLICK <br />
      Add Value will be maximum 25 and Remove Value will be minimum 0 
    </h2>

    <br /> <br />

    <button className='bg-white p-2 rounded-md'
    onClick={AddVal}
    >
      Add Value: {counter}
    </button>

    <br /> <br />

    <button className='bg-white p-2 rounded-md'
    onClick={RemoveVal}
    >
      Remove Value: {counter}
    </button>
    </>
  )
}

export default App
