def on_button_pressed_a():
    radio.send_string("Hello Earth!")
    basic.show_icon(IconNames.YES)
    control.wait_micros(1000) #delay between clearing the screen, line below this clears screen
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("") #custom message goes here
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_string(receivedString)
    serial.write_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    # custom message goes here
    radio.send_string("")
input.on_button_pressed(Button.B, on_button_pressed_b)


serial.redirect_to_usb() #send radio recieved strings through usb to computer for logging and readability
radio.set_group(17)

def on_forever():
    pass
basic.forever(on_forever)
