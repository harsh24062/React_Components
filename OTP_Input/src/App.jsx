import { useState } from "react"
import "./App.css"

const OTP_DIGITS_COUNT = 5

function App() {

  const [inputArray,setInputArray] = useState(new Array(OTP_DIGITS_COUNT).fill(1))

  return (
    <div className="App">  
      <h1>Enter Your OTP Here</h1>  
      {inputArray.map((input,index)=>{
        return <input key={index} type="text" className="otp-input"/>
      })}
    </div>
  )
}

export default App
