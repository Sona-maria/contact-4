import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Add from './components/Add'
import View from './components/View'
import AboutUs from './components/Aboutus'
import BirthdayReminder from './components/BirthdayReminder'
import Message from './components/Message'


function App() {
  const [count, setCount] = useState(0)
   const [birthdayData, setBirthdayData] = useState([]);

  const addBirthday = (newBirthday) => {
    setBirthdayData((prevData) => [...prevData, newBirthday]);
  };

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
        <Route path='/a' element={<Add addBirthday={addBirthday}/>}/>
        <Route path='/v' element={<View/>}/>
        <Route path='/Ab' element={<AboutUs/>}/>
        <Route path="/Birthdays" element={<BirthdayReminder birthdayData={birthdayData} />} />
          <Route path="/Message" element={<Message />} />

      </Routes>
    </>
  )
}

export default App
