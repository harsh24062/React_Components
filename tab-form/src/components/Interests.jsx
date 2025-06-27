import { useEffect } from "react"

const Interests = ({data,setData}) => {

  const {interests} = data

  const handleChange = (e) => {
   
    setData(prevData => ({...prevData,interests:e.target.checked?
      [...interests,e.target.name]:interests.filter(i => i!=e.target.name)
    }))
  }

  useEffect(()=>{
    console.log(data)
  },[data])

 return <div>
    <div>
      <label>
        <input type="checkbox" name="coding" checked={interests.includes("coding")} onChange={handleChange}/>
        Coding
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" name="travelling" checked={interests.includes("travelling")} onChange={handleChange}/>
        Travelling
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" name="cricket" checked={interests.includes("cricket")} onChange={handleChange}/>
        Cricket
      </label>
    </div>
 </div>
}

export default Interests 