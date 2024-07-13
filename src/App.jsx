import { useState } from 'react'
import ProgressBar from './ProgressBar.jsx'

import './App.css'

function App() {
  const [progress, setProgress] = useState(0)
  if (progress > 100){
    setProgress(0)
  }
  let updateProgress = () => {
    setProgress(progress + 10)
  }
  return (
    <div>
        <ProgressBar progress={progress}></ProgressBar>
        <button onClick={updateProgress}>Increase Progress</button>
    </div>
  )
}

export default App
