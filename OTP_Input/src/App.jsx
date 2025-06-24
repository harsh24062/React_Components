import { useEffect, useRef, useState } from "react"
import "./App.css"

const OTP_DIGITS_COUNT = 5

function App() {

  const [inputArray,setInputArray] = useState(new Array(OTP_DIGITS_COUNT).fill(""))
  const refArr = useRef([])

  const handleOnChange = (value,index) => {
   console.log(value)
   if(isNaN(value))return
   const newArr=[...inputArray]
   const newValue = value.trim()
   newArr[index]=newValue.slice(-1)
   setInputArray(newArr)

   if(newValue && index<OTP_DIGITS_COUNT-1){
   refArr.current[index+1]?.focus()
   }
  }

  const handleOnKeyDown = (key,index) => {
    if(key=="Backspace" && inputArray[index]==="" && index>0){
      refArr.current[index-1]?.focus()
    }
  }

  useEffect(()=>{
    refArr.current[0]?.focus()
  },[])

  return (
    <div className="App">  
      <h1>Enter Your OTP Here</h1>  
      {inputArray.map((input,index)=>{
        return <input 
        key={index} type="text"
        className="otp-input" value={inputArray[index]}
        ref={(ref)=>refArr.current[index]=ref}
        onChange={(e)=>handleOnChange(e.target.value,index)}
        onKeyDown={(e)=>handleOnKeyDown(e.key,index)}/>
      })}
    </div>
  )
}

export default App
