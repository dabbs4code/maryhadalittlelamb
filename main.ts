input.onButtonPressed(Button.A, function () {
    music.playMelody("A G F G A A A - ", 120)
    music.playMelody("G G G - A C5 C5 - ", 120)
    music.playMelody("A G F G A A A A ", 120)
    music.playMelody("G G A G F - - - ", 120)
})
basic.forever(function () {
    basic.showString("Mary had a little lamb")
})
