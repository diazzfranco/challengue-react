import React from 'react'
import Cards from './components/Cards'


const App = () => {
  const citys = [
  {
    "ciudad": "Amsterdan",
    "temperatura": "7°C"
  },
  {
    "ciudad": "Tokio",
    "temperatura": "15°C"
  },
  {
    
    "ciudad": "Estocolmo",
    "temperatura": "10°C"
  }
]


  return (
    <Cards ciudades={citys} />
  )
}

export default App