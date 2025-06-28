
const Profile = ({data,setData,errors}) => {

   const handleChange = (e,item) => {
     setData(prev=>({...prev,[item]:e.target.value}))
   }

 return <div>
     <div>
      <label>Name : </label>
      <input type="text" placeholder="Enter Your Name here" value={data.name} onChange={e=>handleChange(e,"name")}/>
      {errors.name  && <span className="error">{errors.name}</span>}
     </div> 
     <div>
      <label>Age : </label>
      <input type="text" placeholder="Enter Your Age here" value={data.age} onChange={e=>handleChange(e,"age")}/>
      {errors.age  && <span className="error">{errors.age}</span>}
     </div>
     <div>
      <label>Email : </label>
      <input type="text" placeholder="Enter Your Email here" value={data.email} onChange={e=>handleChange(e,"email")}/>
      {errors.email  && <span className="error">{errors.email}</span>}
     </div>
 </div>
}

export default Profile