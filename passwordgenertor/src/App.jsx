import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setCLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback( () =>{
    let pass = ""
    let str = "ABCCDEFGHIJKLMNOPQRSTUVWRYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_{}[]?/\|"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass = str.charAt(char);
      
    }

    setPassword(pass) 


  }, [length, numberAllowed, characterAllowed, setPassword])


  return (
    <>
     <div className="w-full max"></div>
     <input type="text"
     value={password}
     className='outline-none w-full py-1 px-3'
     placeholder='Password'
     readOnly />
    </>
  )
}

export default App
