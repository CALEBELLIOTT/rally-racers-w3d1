

export class Racer {

  constructor(name, imgUrl, number) {
    this.name = name
    this.imgUrl = imgUrl
    this.number = number
    this.distance = 0

  }
  get Template() {
    return `
    <div class="col-12 bg-dark m-1 r1">
      <h3 id='${this.number}'>${this.name}</h3>
    </div>
    `
  }
}
