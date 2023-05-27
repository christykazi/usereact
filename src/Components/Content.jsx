import React from 'react'
import {useState} from 'react'

const Content = () => {
    const [name,setName] =useState("Front and Backend")
    const[skill,setSkill] = useState("graphic design")
    const[users,setUsers] = useState("clients")

    const approve = () =>{
        setName("Full Stack")
        setSkill("websites and app")
        setUsers("clients")
    }

  return (
    <div>
        <h1> I am a  {name}  Web Developer from Gomycode</h1>
        <p>I provide technical and {skill} solutions to my {users}</p>
        <button onClick={approve}>confirm</button>
    </div>
  )
}

export default Content