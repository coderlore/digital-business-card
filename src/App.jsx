import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import './App.css'
import Profile from './components/Profile'

export default function App() {
  return (
      <div>
          <Profile />
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}
