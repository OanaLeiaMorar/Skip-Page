import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MenuItem from './components/MenuItem'
import MenuBar from './components/MenuBar'
import Title from './components/Title'
import CardList from './components/CardList'
import Button from './components/Button'

function App() {
 

  return (
    <>
    <div style={{textAlign: "center" }}>
    <MenuBar></MenuBar>
    <Title></Title>
    <CardList></CardList>
    </div>
    </>
  )
}

export default App
