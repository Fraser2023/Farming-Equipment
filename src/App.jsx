import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='' >
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element= {<Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App