import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Profile from './components/Profile'
import './App.css'

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
