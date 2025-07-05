import ProgressBar from "./Components/ProgressBar"
import "./App.css"

function App() {
 
  return (
    <div className="App">
        <h1>Progress Bar</h1>
        <div className="progress-bar-container">
         <ProgressBar progress={70}/>
        </div>
    </div>
  )
}

export default App
