import { ProxyState } from "../AppState.js";
import { racersService } from "../Services/RacersService.js";


let racers = ProxyState.racers
function draw_() {
  let template = ``
  racers.forEach(r => template += r.Template)
  document.getElementById("racers").innerHTML = template
}

export class RacersController {
  constructor() {
    console.log("constructor loaded");
    draw_()
  }

  startRace() {
    console.log("test successful");
    racersService.startGame()
  }
}