
const Settings = ({data,setData,errors}) => {
  const {theme} = data

  const handleChange = (e) =>{
    setData(prevData => ({...prevData,theme:e.target.name}))
  }

  return <div>
    <div>
      <label>
        <input type="radio" name="dark" checked={theme==="dark"} onChange={e=>handleChange(e)}/>
        Dark
      </label>
    </div>
    <div>
      <label>
        <input type="radio" name="light" checked={theme==="light"} onChange={e=>handleChange(e)}/>
        Light
      </label>
    </div>
 </div>
}

export default Settings