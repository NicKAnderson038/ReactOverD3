import React from 'react'

import { logColor } from '../Helpers/ConsoleLogStyle'

function getTicks(count, max) {
  return [...Array(count).keys()].map(d => {
    return (max / (count - 1)) * parseInt(d)
  })
}

const axis = props => {
  const { classAxis, MAX_X, MAX_Y, tickCount } = props

  let ticks
  switch (classAxis) {
    case 'x-axis':
      ticks = getTicks(tickCount, MAX_X)
      break
    case 'y-axis':
      ticks = getTicks(tickCount, MAX_Y).reverse()
      break
    default:
      break
  }
  logColor(`${classAxis} ticks value is ${ticks}`)

  return (
    <div className={classAxis}>
      {ticks.map(v => (
        <g data-value={v} key={`${Math.random() + v}`} />
      ))}
    </div>
  )
}

export default axis