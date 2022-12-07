input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hello Earth!")
    basic.showIcon(IconNames.Yes)
    control.waitMicros(1000)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    `)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendString("")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
    serial.writeString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    //  custom message goes here
    radio.sendString("")
})
serial.redirectToUSB()
radio.setGroup(17)
basic.forever(function on_forever() {
    
})
