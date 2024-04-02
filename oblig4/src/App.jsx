import { useState } from 'react'
import { Home } from './components/Home'
import { Layout } from './components/Layout'
import { Routes, Route } from 'react-router-dom'
import './App.css'



function App() {
  

  return (
    <>
      <Layout>
      <Routes>
          <Route index element={<Home />}/>
        </Routes>
      </Layout>

    </>
  )
}

export default App
