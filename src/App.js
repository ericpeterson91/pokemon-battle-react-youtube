import React, { useState } from 'react'
import Pokemon from './Pokemon'

const App = () => {

  const [charizardHP, setCharizardHP] = useState(100)
  const [blastoiseHP, setBlastoiseHP] = useState(100)

  return (
    <div className='container'>
      <Pokemon name='Charizard'/>
      <Pokemon name='Blastoise'/>
    </div>
  )
}

export default App
