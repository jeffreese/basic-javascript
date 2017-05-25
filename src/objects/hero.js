export default class Hero {
  constructor () {
    this.height = 32
    this.width = 32
    this.image = this.getImage()

    this.speed = 256
    this.x = 0
    this.y = 0
  }

  getImage () {
    let heroReady = false
    const heroImage = new Image()
    heroImage.onload = () => heroReady = true
    heroImage.src = 'img/hero.png'

    return heroImage
  }
}
