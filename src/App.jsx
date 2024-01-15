import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Route, Router, RouterProvider, Routes } from 'react-router'
import LoginPage from './login/LoginPage'
import SideBar from './component/SideBar'
import Statistique from './statistique/Statistique'
import CRUD from './crud/CRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
       <CRUD/>
  )
}

export default App
