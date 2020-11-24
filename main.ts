let sprite = 0
input.onGesture(Gesture.Shake, function () {
    sprite = randint(1, 6)
    basic.showNumber(sprite)
    if (sprite > 3) {
        basic.showString("WIN")
    } else {
        basic.showString("LOSE")
        game.gameOver()
    }
})
