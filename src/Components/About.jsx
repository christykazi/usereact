import React from 'react'
import {useState} from 'react'

const About = () => {
  const [font,SetFont]= useState("Christy")
    const [job,setJob]= useState("internet") 

     const ahead = () => {
      SetFont("Ifunanya")
      setJob("FullStack")
     }

  return ( 
    <div>
      <h1>my name is {font} Agbai</h1>
      <p>I am a {job} programmer</p>
      <button onClick={ahead}>submit</button>
    </div>
  )
}

export default About