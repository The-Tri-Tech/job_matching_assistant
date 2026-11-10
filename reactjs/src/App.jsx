import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="card">
        <h1>React Sample App</h1>
        <p className="subtitle">Hello from frontend (React)!</p>
        <button onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
