import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Mainpage from './pages/Mainpage'
import Contactpage from './pages/Contactpage'

const App = () => {
  return (
	<Routes>
		<Route path="/" element={<Mainpage/>}/>
		<Route path="/about" element={<Aboutpage/>}/>
		<Route path="/contact" element={<Contactpage/>}/>
	</Routes>
  )
}

export default App
