class Player {
  health = 100

  move() {
    console.log("Player has moved")
  }
}


class Paul extends Player {
  backFlip() {
    console.log("Paul did a back flip")
  }
}

class Yoshimitshu extends Player {
  moveSward() {
    console.log("Yoshi moved the sword")
  }
}

const paul = new Paul()
paul.move()
paul.backFlip()