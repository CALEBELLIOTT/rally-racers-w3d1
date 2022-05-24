import { ProxyState } from "../AppState.js"




function movePlayers() {
  ProxyState.racers.forEach(r => {
    if (r.distance < 95) {
      let randNum = Math.floor(Math.random() * 10)
      r.distance += randNum
      document.getElementById(`${r.number}`).style.paddingLeft = `${r.distance}%`
    }
    else if (r.distance > 95) {
      r.distance = 95
    }
  })
}

class RacersService {


  startGame() {
    let interval = setInterval(movePlayers, 300)
  }
}

export const racersService = new RacersService