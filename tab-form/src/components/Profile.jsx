
const Profile = ({data,setData}) => {

   const handleChange = (e,item) => {
     setData(prev=>({...prev,[item]:e.target.value}))
   }

 return <div>
     <div>
      <label>Name : </label>
      <input type="text" placeholder="Enter Your Name here" value={data.name} onChange={e=>handleChange(e,"name")}/>
     </div> 
     <div>
      <label>Age : </label>
      <input type="text" placeholder="Enter Your Name here" value={data.age} onChange={e=>handleChange(e,"age")}/>
     </div>
     <div>
      <label>Email : </label>
      <input type="text" placeholder="Enter Your Name here" value={data.email} onChange={e=>handleChange(e,"email")}/>
     </div>
 </div>
}

export default Profile