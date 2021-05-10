def on_button_pressed_a():
    basic.show_string("" + ("" + str(input.temperature())))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    basic.show_string("I")
    basic.clear_screen()
    basic.pause(500)
    basic.show_icon(IconNames.HEART)
    basic.pause(500)
    basic.clear_screen()
    basic.show_string("MICROBIT")
    basic.pause(2000)
basic.forever(on_forever)
