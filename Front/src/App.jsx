import { useState } from 'react'
import Auth from './components/Auth'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Auth/>
    </div>
  )
}

export default App
