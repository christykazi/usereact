import React from 'react'
import {useState} from 'react'

const Main = () => {
  const[name,setName]=useState("Obinna")
  const[house,setHouse] = useState("flats")
  const[cars,setCars] = useState("cars")
  const [noofrange,setNoofrange] = useState(4)

  const assign =() =>{
    setName("David")
    setHouse("duplex")
    setCars("limos")
    setNoofrange(7)
  }

  return (
    <div>
      <h1> Mr {name} has 3 {house}</h1>
      <p>He has a {cars} and  {noofrange} range rover</p>
      <button onClick={assign}>click me</button>
    </div>
  )
}

export default Main