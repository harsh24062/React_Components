import "../App.css"

const ProgressBar = ({progress}) => {
   return <div className="progress-bar-outer">
       <div className="progress-bar-inner">
         {progress}%
       </div>
   </div>
}

export default ProgressBar