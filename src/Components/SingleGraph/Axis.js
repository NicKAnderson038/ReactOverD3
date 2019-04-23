import React from 'react'

import { logColor } from '../../Helpers/consoleLogStyle'

function getTicks(count, max) {
  return [...Array(count).keys()].map(d => {
    return (max / (count - 1)) * parseInt(d)
  })
}

const axis = props => {
  const { classAxis, MAX_X, MAX_Y, tickCount } = props

  // let transform
  let ticks
  switch (classAxis) {
    case 'x-axis':
      ticks = getTicks(tickCount, MAX_X)
      // transform = `translate(0, ${700})`
      break
    case 'y-axis':
      ticks = getTicks(tickCount, MAX_Y).reverse()
      // transform = 'rotate(-90)'
      break
    default:
      break
  }
  logColor(`${classAxis} ticks value is ${ticks}`)

  return (
    <div className={classAxis}>
      {ticks.map(v => (
        <div
          data-value={v}
          key={`${Math.random() + v}`}
          // style={{transform: transform}}
        />
      ))}
    </div>
  )
}

export default axis
