import { useState } from 'react'

import ProductGateway from './components/hh'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductGateway/>
    </>
  )
}

export default App
