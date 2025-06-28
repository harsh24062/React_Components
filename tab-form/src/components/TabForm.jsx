import { useState } from "react"
import Interests from "./Interests"
import Profile from "./Profile"
import Settings from "./Settings"

const TabForm = () => {

  const [activeTab,setActiveTab] = useState(0)
  const [errors,setErrors] = useState({})

  const [data,setData] = useState({
    name:"Harsh",
    age:18,
    email:"harsh@gmail.com",
    interests:["coding","cricket"],
    theme:"dark"
  })

  const tabs  = [
  {
    name:"Profile",
    component:Profile,
    validate:()=>{
      const err = {}
      if(!data.name || data.name.length<2){
        err.name="Name is not Valid"
      }
      if(!data.age || data.age<18){
        err.age="Age is not Valid"
      }
      if(!data.email || !data.email.endsWith("@gmail.com")){
        err.email="Email is not Valid"
      }
      setErrors(err)

      return (err.name || err.age || err.email)?false:true
    }
  },
  {
    name:"Interests",
    component:Interests,
    validate:()=>{
      return true
    }
  },
  {
    name:"Settings",
    component:Settings,
    validate:()=>{
      return true
    }
  },
]

  const ActiveTabComponent = tabs[activeTab].component

  const handleNextClick = () =>{
    if(tabs[activeTab].validate()){
    setActiveTab(prev => prev+1)
    }
  }

  const handlePreviousClick = () =>{
  if(tabs[activeTab].validate()){
   setActiveTab(prev => prev-1)
  }
  }

  const handleSubmitClick = () =>{
  
   console.log("Make API Call")
  }

    return <div >
        <div className="heading-container">
        {tabs.map((tab,index)=> <div 
        onClick={()=>{setActiveTab(index)}}
        className="heading" key={index}>{tab.name}</div>)}  
        </div>
        <div className="tab-body">
          <ActiveTabComponent data={data} setData={setData} errors={errors}/>
        </div>
        <div className="button-container">
         <div>
           {(activeTab>0)?<div>
           <button onClick={handlePreviousClick}>Previous</button>
           </div>:<></>}
         </div>
         <div>
           {(activeTab<tabs.length-1)?<div>
           <button onClick={handleNextClick}>Next</button>
           </div>:<></>}
         </div>
         <div>
           {(activeTab==tabs.length-1)?<div>
           <button onClick={handleSubmitClick}>Submit</button>
           </div>:<></>}
         </div>
        </div>
    </div>
}

export default TabForm