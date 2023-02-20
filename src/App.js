import './App.css'
import Card from './components/Card'
import Nav from './components/Nav'
import data from './data'
// import React from 'react'

function App() {
  const appData = data.map(item => {
    return <Card 
                key={item.id}
                item={item}/>
  })
  return (
    <div className="App">
      <Nav />
      {appData}
    </div>
  )
}

export default App
