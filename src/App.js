import React from 'react'
import './main.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './main'


function App() {
  return (
    <React.Fragment>
    <Routes>
       <Route path='/main' element={<Main/>} />
    </Routes>
</React.Fragment>

  )
}

export default App