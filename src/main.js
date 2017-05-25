import Hero from './objects/hero'

// Cross-browser support for requestAnimationFrame
const w = window
const requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame

// Create the canvas
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 512
canvas.height = 480
document.body.appendChild(canvas)

// Background
let bgReady = false
const bgImage = new Image()
bgImage.onload = () => bgReady = true
bgImage.src = 'img/background.png'


let monsterReady = false
const monsterImage = new Image()
monsterImage.onload = () => monsterReady = true
monsterImage.src = 'img/monster.png'


const hero = new Hero

// Draw everything
const render = () => {
  if (bgReady) ctx.drawImage(bgImage, 0, 0)
  if (heroReady) ctx.drawImage(heroImage, hero.x, hero.y)
  if (monsterReady) ctx.drawImage(monsterImage, monster.x, monster.y)

  // Score
  ctx.fillStyle = 'rgb(250, 250, 250)'
  ctx.font = '24px Helvetica'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  ctx.fillText('Monsters caught: ' + monstersCaught, 32, 32)
}

// Game loop
const main = () => {
  const now = Date.now()
  let delta = now - then

  update(delta / 1000)
  render()

  then = now

  // request to do this again ASAP
  requestAnimationFrame(main)
}

function bootstrap () {

}

let then = Date.now()
reset()
main()
