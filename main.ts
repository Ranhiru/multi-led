let pauseMs = 200
let clapped = false

input.onSound(DetectedSound.Loud, function () {
    clapped = !clapped
})

basic.forever(function () {
    while(!clapped) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(pauseMs)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(pauseMs)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(pauseMs)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
