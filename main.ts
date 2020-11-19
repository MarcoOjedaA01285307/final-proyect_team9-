input.onPinPressed(TouchPin.P0, function () {
    while (input.temperature() == 50) {
        basic.showString("Player 1 wins ")
    }
})
input.onButtonPressed(Button.A, function () {
    basic.pause(400)
    if (nextNumber <= number) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        score += 1
        number = nextNumber
        nextNumber = randint(0, 50)
        basic.showNumber(number)
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            music.playMelody("C D E F G A B C5 ", 120)
        }
        basic.showNumber(nextNumber)
        basic.showString("Score")
        basic.showNumber(score)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showString("punishment ")
    basic.showString("make the exact number of push ups shown in the creen ")
    basic.showNumber(4 * 2)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(400)
    if (nextNumber >= number) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        score += 1
        number = nextNumber
        nextNumber = randint(0, 50)
        basic.showNumber(number)
    } else {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            music.playMelody("C D E F G A B C5 ", 120)
        }
        basic.showNumber(nextNumber)
        basic.showString("Score")
        basic.showNumber(score)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    while (input.temperature() == 50) {
        basic.showString("Player 2 wins ")
    }
})
let score = 0
let nextNumber = 0
let number = 0
number = randint(0, 50)
nextNumber = randint(0, 50)
score = 0
basic.showNumber(number)
basic.forever(function () {
	
})
