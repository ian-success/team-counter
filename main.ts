input.onButtonPressed(Button.A, function () {
    basic.showString("Teachers Score!!!")
    Teachers += 1
    basic.showNumber(Teachers)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Wow! It's a Tie!")
    Tie += 1
    basic.showNumber(Tie)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Students Score!!!")
    Students += 1
    basic.showNumber(Students)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Students")
    basic.showNumber(Students)
    basic.showString("Teachers")
    basic.showNumber(Teachers)
    basic.showString("Ties")
    basic.showNumber(Tie)
    basic.clearScreen()
})
let Tie = 0
let Students = 0
let Teachers = 0
Teachers = 0
Students = 0
Tie = 0
