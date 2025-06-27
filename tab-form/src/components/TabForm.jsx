import { useState } from "react"
import Interests from "./Interests"
import Profile from "./Profile"
import Settings from "./Settings"

const TabForm = () => {

  const [activeTab,setActiveTab] = useState(0)

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
    component:Profile
  },
  {
    name:"Interests",
    component:Interests
  },
  {
    name:"Settings",
    component:Settings
  },
]

  const ActiveTabComponent = tabs[activeTab].component

  const handleNextClick = () =>{
    setActiveTab(prev => prev+1)
  }

  const handlePreviousClick = () =>{
   setActiveTab(prev => prev-1)
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
          <ActiveTabComponent data={data} setData={setData}/>
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