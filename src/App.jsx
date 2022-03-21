import { useState } from 'react'

import './App.css'
import { Routes1 } from "./Components/Routes";
import { Routes,Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Routes1 />
    </div>
  )
}

export default App
