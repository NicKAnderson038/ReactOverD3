import React, { Component } from 'react'

import { logColor } from '../Helpers/ConsoleLogStyle'

function getTicks(count, max) {
  return [...Array(count).keys()].map(d => {
    return (max / (count - 1)) * parseInt(d)
  })
}

const axis = props => {
  const { classAxis, MAX_X, MAX_Y, tickCount } = props

  let ticks
  if (classAxis.includes('x')) {
    ticks = getTicks(tickCount, MAX_X)
  } else if (classAxis.includes('y')) {
    ticks = getTicks(tickCount, MAX_Y).reverse()
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
