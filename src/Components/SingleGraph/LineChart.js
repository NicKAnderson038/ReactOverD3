import React, { PureComponent } from 'react'
import { logColor } from '../../Helpers/consoleLogStyle'
import Axis from './Axis'

class LineChart extends PureComponent {
  render() {
    const { data, width, height, tickCount } = this.props

    const styles = {
      width: width + 'px',
      height: height + 'px'
    }

    /**
     * Find the Max X & Max Y value for both axis.
     */
    const MAX_X = Math.max(...data.map(d => d.x)),
      MAX_Y = Math.max(...data.map(d => d.y))
    logColor(`Max value of X=${MAX_X} & Y=${MAX_Y}`)

    /**
     * Helper functions for line path calculations.
     */
    const x = val => (val / MAX_X) * width,
      y = val => height - (val / MAX_Y) * height

    /**
     * line path string builder.
     */
    const d = `
          M${x(data[0].x)} ${y(data[0].y)} 
          ${data
            .slice(1)
            .map(d => {
              return `L${x(d.x)} ${y(d.y)}`
            })
            .join(' ')}
        `
    logColor('Path result for "d" ', d)

    return (
      <div className="LineChart" style={styles}>
        <svg className="svg" width={width} height={height}>
          <path d={d} key={`${Math.random()}`} />
        </svg>
        <Axis
          classAxis={'x-axis'}
          MAX_X={MAX_X}
          MAX_Y={MAX_Y}
          tickCount={tickCount}
        />
        <Axis
          classAxis={'y-axis'}
          MAX_X={MAX_X}
          MAX_Y={MAX_Y}
          tickCount={tickCount}
        />
      </div>
    )
  }
}

export default LineChart
