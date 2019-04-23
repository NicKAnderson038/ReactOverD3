import React, { Component } from 'react'

function getTicks(count, max) {
  return [...Array(count).keys()].map(d => {
    return (max / (count - 1)) * parseInt(d)
  })
}

class LineChart extends Component {
  render() {
    const { data, width, height, tickCount } = this.props

    const MAX_X = Math.max(...data.map(d => d.x)),
      MAX_Y = Math.max(...data.map(d => d.y))

    const x = val => (val / MAX_X) * width,
      y = val => height - (val / MAX_Y) * height,
      x_ticks = getTicks(tickCount, MAX_X),
      y_ticks = getTicks(tickCount, MAX_Y).reverse()

    const d = `
          M${x(data[0].x)} ${y(data[0].y)} 
          ${data
            .slice(1)
            .map(d => {
              return `L${x(d.x)} ${y(d.y)}`
            })
            .join(' ')}
        `

    return (
      <div
        className="LineChart"
        style={{
          width: width + 'px',
          height: height + 'px'
        }}>
        <svg width={width} height={height}>
          <path d={d} key={`${Math.random()}`} />
        </svg>
        <div className="x-axis">
          {x_ticks.map(v => (
            <g data-value={v} key={`${Math.random() + v}`} />
          ))}
        </div>
        <div className="y-axis">
          {y_ticks.map(v => (
            <g data-value={v} key={`${Math.random() + v}`} />
          ))}
        </div>
      </div>
    )
  }
}

export default LineChart
