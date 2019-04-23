import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const LineChart = lazy(() => import('./Components/LineChart'))
const Loading = () => <div>Loading...</div>

function App() {
  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 40 },
    { x: 20, y: 30 },
    { x: 30, y: 70 },
    { x: 40, y: 0 }
  ]

  return (
    <div className="App">
      <br />
      <h1>Line Graph</h1>
      <br />
      <br />
      <Suspense fallback={Loading}>
        <LineChart width={500} height={300} tickCount={5} data={data} />
      </Suspense>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
