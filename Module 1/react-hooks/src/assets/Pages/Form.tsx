import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    console.log(name)
  return (
    <div>
        <input onChange={(e)=> setName(e.target.value)} type="text" name="name" id="name" />
        <input type="text" name="email" id="email" />
        <button type="submit">Submit</button>
    </div>
  )
}

export default Form;