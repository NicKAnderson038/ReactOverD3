export const logColor = (...value) => {
  let color = 'pink'
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      color = 'pink'
      break
    case 1:
      color = 'orange'
      break
    case 2:
      color = 'yellow'
      break
    case 3:
      color = 'turquoise'
      break
    default:
      break
  }

  console.log(
    `%c ${value}`,
    `color:${color};font-size:20px;font-weight:bold;font-family:Baskerville;background: #222;padding: 3px 20px;`
  )
}
