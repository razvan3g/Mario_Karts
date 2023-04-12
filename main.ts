controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    sprMariosKart.setImage(img`
        . . . . . . 8 8 c c 8 8 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 6 c 6 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 6 9 6 6 6 6 6 c 6 f . 
        . . . f 6 2 2 6 6 6 6 6 2 2 f . 
        . . . f 6 2 9 2 6 6 6 2 6 2 f . 
        . . . f 6 2 6 9 2 6 2 6 c 2 f . 
        . . . 8 6 2 8 c c 2 c 8 c 2 8 . 
        . . . 8 6 2 c b b b b c 8 2 8 . 
        . . . 8 6 2 b b b b b b 8 2 8 . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . f 8 d 8 8 8 8 8 8 d 8 f . 
        . . . f 8 6 d 8 8 8 8 d 6 8 f . 
        . . . f f 8 8 8 8 8 8 8 8 f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    sprMariosKart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 6 6 . . 
        . . . . . 6 c 6 6 6 6 6 6 9 6 . 
        . . . . 6 c c 6 6 6 6 6 6 9 c 6 
        . . d 6 9 c c 6 9 9 9 9 9 9 c c 
        . d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
        . 6 6 6 9 2 2 8 b b b 8 b b 2 2 
        . 6 6 6 6 2 8 2 b b b 8 b 2 b 2 
        . 6 6 6 6 2 6 6 2 6 6 8 2 6 6 2 
        . 6 d d 6 2 f 8 8 2 f 2 8 8 8 2 
        . d d 6 8 2 8 f 8 8 2 8 8 8 8 2 
        . 8 8 8 8 2 8 8 f f f 8 8 8 8 2 
        . 8 8 8 8 f f f 8 8 8 8 f f f f 
        . . . 8 f f f f f 8 8 f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    sprMariosKart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 2 2 b 8 b b b 8 8 2 2 6 6 
        . 6 8 2 b 2 8 b b b b 2 6 2 6 6 
        . 8 8 2 6 6 2 6 6 6 2 6 8 2 6 6 
        . 8 8 2 8 8 8 2 8 2 8 f 8 2 d d 
        . 8 8 2 8 8 8 f 2 8 f 8 8 2 6 d 
        . 8 8 2 8 8 8 f f f 8 8 8 2 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function initGame () {
    tiles.setCurrentTilemap(tilemap`level1`)
    initMario()
}
function initMario () {
    sprMariosKart = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 2 2 b 8 b b b 8 8 2 2 6 6 
        . 6 8 2 b 2 8 b b b b 2 6 2 6 6 
        . 8 8 2 6 6 2 6 6 6 2 6 8 2 6 6 
        . 8 8 2 8 8 8 2 8 2 8 f 8 2 d d 
        . 8 8 2 8 8 8 f 2 8 f 8 8 2 6 d 
        . 8 8 2 8 8 8 f f f 8 8 8 2 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(sprMariosKart, tiles.getTileLocation(0, 28))
    scene.cameraFollowSprite(sprMariosKart)
    controller.moveSprite(sprMariosKart)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    sprMariosKart.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 6 6 . . . . 
        . . . . . 6 6 9 9 6 6 6 6 . . . 
        . . . . . c 9 6 6 6 6 6 c . . . 
        . . . . 6 c 9 6 6 6 6 6 c 6 . . 
        . . . 8 6 c 9 6 6 6 6 6 c 6 8 . 
        . . . f 6 2 2 6 6 6 6 6 2 2 f . 
        . . . f 8 2 6 2 6 6 6 2 c 2 f . 
        . . . f 6 2 6 b 2 b 2 6 c 2 f . 
        . . . 8 6 2 b c c 2 c b 6 2 8 . 
        . . . 8 8 2 c c c c c c b 2 8 . 
        . . . f 8 2 9 9 9 9 9 9 9 2 f . 
        . . . f 8 d 6 6 6 6 6 6 d 8 f . 
        . . . . 6 d d 6 6 6 6 d d 6 f . 
        . . . . f 6 d 6 6 6 6 d 6 f . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        `)
})
let sprMariosKart: Sprite = null
initGame()
