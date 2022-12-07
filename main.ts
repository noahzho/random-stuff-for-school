input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hello Earth!")
    basic.showIcon(IconNames.Yes)
    control.waitMicros(1000)
    // delay between clearing the screen, line below this clears screen
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
    `)
})
// custom message goes here
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
// send radio recieved strings through usb to computer for logging and readability
radio.setGroup(17)
basic.forever(function on_forever() {
    
})
