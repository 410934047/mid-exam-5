let sprite = 0
input.onGesture(Gesture.Shake, function () {
    sprite = randint(1, 6)
    basic.showNumber(sprite)
    if (sprite > 3) {
        basic.showString("Win")
    } else {
        basic.showString("Lose")
        game.gameOver()
    }
})
