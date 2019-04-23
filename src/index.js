import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

const LineChart = lazy(() => import('./Components/SingleGraph/LineChart'))
const MultiLineChart = lazy(() =>
  import('./Components/MultiGraph/MultiLineChart')
)
const Loading = () => <div>Loading...</div>

function App() {
  const data = [
    { x: 0, y: 10 },
    { x: 10, y: 40 },
    { x: 20, y: 30 },
    { x: 30, y: 70 },
    { x: 40, y: 0 }
  ]

  const data2 = [
    {
      name: 'USA',
      values: [
        { date: '2000', price: '100' },
        { date: '2001', price: '110' },
        { date: '2002', price: '145' },
        { date: '2003', price: '241' },
        { date: '2004', price: '101' },
        { date: '2005', price: '90' },
        { date: '2006', price: '10' },
        { date: '2007', price: '35' },
        { date: '2008', price: '21' },
        { date: '2009', price: '201' }
      ]
    },
    {
      name: 'Canada',
      values: [
        { date: '2000', price: '200' },
        { date: '2001', price: '120' },
        { date: '2002', price: '33' },
        { date: '2003', price: '21' },
        { date: '2004', price: '51' },
        { date: '2005', price: '190' },
        { date: '2006', price: '120' },
        { date: '2007', price: '85' },
        { date: '2008', price: '221' },
        { date: '2009', price: '101' }
      ]
    },
    {
      name: 'Maxico',
      values: [
        { date: '2000', price: '50' },
        { date: '2001', price: '10' },
        { date: '2002', price: '5' },
        { date: '2003', price: '71' },
        { date: '2004', price: '20' },
        { date: '2005', price: '9' },
        { date: '2006', price: '220' },
        { date: '2007', price: '235' },
        { date: '2008', price: '61' },
        { date: '2009', price: '10' }
      ]
    }
  ]

  return (
    <div className="App">
      <br />
      <h1 className="headers">Single Line Graph</h1>
      <br />
      <br />
      <Suspense fallback={Loading}>
        <LineChart width={500} height={300} tickCount={5} data={data} />
        <br />
        <br />
        <br />
        <MultiLineChart width={500} height={300} margin={50} data={data2} />
      </Suspense>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
