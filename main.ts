namespace SpriteKind {
    export const nothing = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
8 8 8 8 8 8 8 8 8 8 8 8 8 a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
8 8 8 8 8 8 8 8 8 8 8 8 8 a a a 
a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a 
a a a 8 8 8 8 8 8 8 8 8 8 8 8 8 
a a a a a a a a a a a a a a a a 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.melt)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sonic.y >= 80) {
        Sonic.vy = -200
    }
})
let Missile: Sprite = null
let Missile_Speed = 0
let Rock: Sprite = null
let Rock_Speed = 0
let Tree: Sprite = null
let Tree_Speed = 0
let Sonic: Sprite = null
scene.setBackgroundColor(9)
Sonic = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 9 9 6 6 6 6 8 8 8 . . . 8 . . 
. . . . . . . . . . . . 8 8 8 8 9 6 6 6 8 8 8 9 8 8 8 8 . 8 . . 
. . . . . . . 1 1 1 1 . . . . 9 6 6 6 8 8 8 8 8 9 9 9 8 8 8 8 . 
. . . . . . 1 1 1 1 1 1 . . . . . 8 8 8 8 8 8 9 9 9 9 9 8 8 8 . 
. . . . . 1 1 f 1 1 1 1 1 . . . 8 8 8 8 8 9 8 8 8 8 8 9 8 8 8 . 
. . . . . . f . f 1 1 1 9 9 8 8 8 8 8 9 9 1 9 8 1 8 8 8 9 8 8 . 
. . . . . . . . . f 1 9 9 8 6 6 8 8 8 8 8 9 8 9 1 1 1 8 8 8 8 8 
. 1 1 1 . . . . f . 9 8 8 8 8 6 6 8 8 8 8 8 8 9 1 1 1 8 8 8 8 8 
1 1 1 1 1 1 . . . 8 . 8 8 8 8 8 6 8 8 8 8 8 8 9 1 1 1 f 8 8 8 9 
1 1 1 f 1 1 1 1 6 1 1 1 e e 8 8 8 8 6 8 8 8 8 9 1 1 1 8 8 8 8 f 
1 1 1 1 f 1 1 1 1 1 1 1 4 e 8 8 8 9 6 6 8 8 8 9 1 1 1 1 f 9 f 8 
. 1 1 . . 1 1 1 1 f 1 1 2 4 d 8 8 9 9 6 6 8 8 8 9 9 1 1 f 1 f 8 
. . . . . 1 1 1 1 e f e f 4 f d 8 8 9 9 6 6 8 1 1 8 9 1 1 1 1 f 
. . . . 1 1 1 . e e . e e f 4 4 d 8 8 9 9 8 8 d d 1 1 d d f f f 
. . . . 1 1 . e 8 8 8 8 8 . 2 2 4 d 8 8 8 8 d d d d d d d 4 2 . 
. . . . . . 8 8 8 . . . 8 9 8 8 4 d d 8 8 8 4 d d d d d 4 2 . . 
. . 2 . . 8 . . . 8 8 8 . . 8 8 8 4 4 . 8 8 8 4 d d d 4 2 . . . 
. 2 2 . 8 . . 8 8 . . . . . . 9 8 8 . . f 8 8 8 4 4 4 2 . . . . 
. f 2 . 8 . 8 9 . . . . . . . . 8 8 . . . . f f 2 2 . . . . . . 
f 2 f . 8 . 8 8 . . . . . . . . 8 8 . . . . . . . 2 . . . . . . 
f f 2 . 8 . 8 8 9 . . . . . . . 8 8 . . . . . . . f . . . . . . 
f 2 f 2 . 8 . 8 8 8 8 . . . 8 9 9 8 . . . . . . . . . . . . . . 
f f 2 f . 8 . . 8 8 8 8 8 8 9 9 8 8 . . . 9 . . . . . . . . . . 
. f f 2 2 . 8 . . 8 8 8 8 9 9 8 8 . . . . 8 . . . . . . . . . . 
. f 2 f 2 2 . 8 8 . . 8 8 8 8 8 . . . . 8 . . . . . . . . . . . 
. . f 2 2 2 2 2 . 8 8 . . . . . . . 8 8 . . . . . . . . . . . . 
. . . f f 2 2 2 2 2 . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . f f 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . 
. . . . . . . f f f f 2 d d 2 2 2 2 2 2 2 2 2 2 . . . . . . . . 
. . . . . . . . . . . f f f f f f f f f f . . . . . . . . . . . 
`, SpriteKind.Player)
Sonic.setPosition(18, 89)
music.baDing.play()
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . f f . . . . . . . . c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f f f f . f f f f . . . . . . c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f . . . . . . f f f f f f f f f . . . . . c c c c c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f . . . . f f f f d d d d d d . . . . f c c c c c c c c 1 1 1 1 1 1 1 c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . e e e f f . . f f f d d d d d d d f . . f e c c c c c c c 1 1 1 1 1 1 1 1 c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e e e f f f f d d d f f f d f f . f e e e f c c c c c 1 1 1 1 1 1 1 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f e e e e e e e f f d d d f f f d f f f e e e f c c c c c c 1 1 1 1 1 1 1 c c c c c 1 1 1 1 1 1 1 1 1 1 1 1 1 a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f f e e e e e e f d d d f f f d d f e e e f c c c c c c c 1 1 1 1 1 a a a c c c c c c 1 1 1 1 1 1 1 1 1 1 1 a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f f f e e e e e e e d d f d d d e e e e e f c c c c c c 1 1 1 1 1 a a a a c c c c c 1 a a a 1 1 1 1 1 1 1 a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . f 1 f e e e e e e e e e e e f d d e e e e e e f c c c c c c c c c c a a a a c c c c c c a a a 1 1 1 1 1 1 1 1 a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f 1 f e e e e e e f f f e e e e f f f e f f f f c c c c c c c c c c c c a a a c c c c c c a a a a 1 1 1 1 1 1 1 a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f 1 f f f f f f f f 2 2 2 f d d d d f 2 2 f 1 f c c c c c c c c c c c c c a a a a c c c c c a a a a a 1 1 1 1 1 1 a a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f 1 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 2 5 f 1 f c c c c c c c c c c c c c a a a c c c c c a a a a a 1 1 1 a a a a a a a a a a a a . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f 1 1 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 2 2 2 5 f 1 c c c b b c c c c c c c c c a a c c c c c c a a a a a a a a a a a a a a a a a a a . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f 1 2 2 2 2 2 2 2 2 f 2 f 5 5 2 2 2 2 2 2 f 2 2 2 2 2 5 f 1 f b b b c c c c c c c c c a a c c c c c c c a a a a a a a a a a a a a a a a a a a . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f 1 2 2 2 2 2 2 2 2 f 2 f 5 5 5 2 2 2 2 2 2 f 2 2 2 2 2 f 2 1 f b b b b c c c c c c c a a c c c c c c a a a a a c c c a a a a a a a a a a a a a . . c 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . f 1 2 2 2 2 2 2 2 2 f 2 2 1 f 5 5 2 2 2 2 2 2 f 2 2 2 2 2 f f 2 1 f b b b b c c c c c a a a a c c c c c a a a a c c c c b b b b b b b a a a a a a . . c c 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f 1 2 2 2 2 2 2 2 2 f 2 1 1 1 f f f 2 2 2 2 2 2 2 f 2 2 2 2 2 5 f 2 1 b b b b c c c c c a a a a c c c c c a c c c c c c c b b b b b b b a a a a a a . c c c 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f 1 2 2 2 2 2 2 2 f f 2 1 1 1 2 2 f 5 5 2 2 2 2 2 2 f 2 2 2 2 2 2 5 f 2 1 b b b b c c c c c a a a c c c c c c c c c c c c c b b b b b b b b b b b a a a c c c c 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 2 2 2 2 2 f f f 2 1 1 1 2 2 2 1 f 5 5 2 2 2 2 2 f f f f f f f f 2 f 2 2 2 f b b b c c c c a a a c c c c c c c c c c c c c b b b b b b b b b b b b a a c c c c c 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 2 2 2 2 2 2 2 f 1 1 2 2 2 1 1 1 f 5 5 2 2 2 2 f f f f f f f f f f f 2 2 2 1 b b b c c c c a a a c c c c c c c c c c c c c b b b b b b b b b b b b b a c c c c c 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 2 2 2 2 2 2 f 5 f 2 2 1 1 1 1 2 2 f f 2 2 2 f f f f c c c c c c f f 2 2 2 1 b b b b c c c a a a c c c c c c c c c c c c c c b b b b b b b b b b b b c c c c c c 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . f 1 2 2 2 2 2 2 f 5 5 f 1 1 1 2 2 2 2 2 2 2 2 2 f f f f f c c c c c f f 2 2 2 1 b b b b c c c a a a c c c c c b b b b c c c c c b b b b b b b b b b b b c c c c c a a 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f 1 2 2 2 2 2 f 5 5 5 f 2 2 2 2 2 2 2 2 2 2 f f f f f f c c c c c f f f 2 2 1 f b b b b b b a a a c c c c b b b b b b b c c c b b b b b b b b b b b c c c c c c a a a 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f 1 2 2 2 2 2 2 f 5 5 f 2 2 2 2 2 2 2 2 2 2 f f f f f f f c c c c c f f 2 1 f b b b b b b b a a c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c a a a a 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f 1 2 2 2 f f f 5 5 f f 2 2 2 2 f 2 2 2 f f f f f f f f c c c c c f f 2 1 f b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c a a a 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . c c f 1 1 f 5 5 5 5 5 1 1 f 2 2 f 1 f 2 2 f f f f f f f f f c c c f f 1 f f b b b b b b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c a a a 1 1 a a a 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . c c c c f f f 5 5 5 5 5 5 1 1 1 f 2 f 1 f 2 2 f f f f f f f f f f c f f f 1 f b b b b b b b b b c c c c c b b b b b b b b b b b b b b b b b b b b b b c c c c c c c a a a 1 1 a a a a 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. c c c c c f 5 5 5 5 5 5 5 f 1 1 1 1 f f 1 f 2 f f f f f f f f f f f f f f f f f b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c a a a a . a a a a 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c f f 5 5 5 f 1 1 1 1 1 f 2 f 2 2 f f f f f f f f f f f f f f f 5 f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c a a a a a a a a a a a a 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c f f f 1 1 1 1 1 1 f 2 2 2 f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c a a a a a a a a a a a a 1 1 1 1 b b b 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c c f 1 1 1 1 1 1 f f 2 2 f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c a a a a a a a a a a a a a a 1 1 1 b b b 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . c c 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c c f f 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c a a a b b b a a a a a a a a a 1 1 b b b b b 1 1 1 1 1 1 . . . . . . . . . . . . . . . . c c 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
c c c c c c c c c c f 1 1 f 1 1 1 f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c a a a a b b b a a a a a a a a a a a a b b b b b 1 1 1 1 1 1 1 . . . . . . . . . . . . . . c c 1 1 1 1 1 1 1 1 1 1 . . . . . c c c c . . . . . . . . . . . . . 
c c c c c c c c c c f 1 1 1 1 1 1 2 2 f f f f f f f 2 2 2 2 f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c a a b b b b b b a a a a a a a a a a a b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . c c c c 1 1 1 1 1 1 1 1 1 1 1 . . . . c c c c . . . . . . . . . . . . . 
c c c c c c c c c c c f f 1 1 1 f 2 2 f f f f f f 2 2 2 2 2 c f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c a a b b b b b b a a a a a a a a a a a a b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . c c c c a a a 1 1 1 1 1 1 1 1 1 . . . c c c c 1 1 1 . . . . . . . . . . 
c c c c c c c c c c c c c f f f 2 2 2 f f f f c c f 2 2 2 f c f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c a a a b b b b b b b a a a a a a a a a a a a b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 1 1 . c c c c c a a a 1 1 a a a 1 1 1 1 1 1 . c c c c 1 1 1 1 . . . . . . . . . 
c c c c c c c c c c c c c c c c f 2 f f f f c c c c f 2 c c f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c a a a b b b b b b b b b a a a a b b b b b a a a b b b b b b b b 1 1 1 1 1 1 1 1 1 1 1 c c c c c c a a a 1 1 a a a 1 1 1 1 1 1 . c c c c 1 1 1 1 1 . . . . . . . . 
c c c c c c c c c c c c c c c c f f f f f f c c c c c f c c f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c a a b b b b b b b b b b a b b b b b b b a a a b b b b b b b b b b 1 1 1 1 1 1 1 1 1 c c c c c c c c . 1 1 a a a a 1 1 1 1 1 c c c a a a 1 1 1 1 1 . . . . . . . 
c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c a a b b b b b b b b b b b b b b b b b b b b c b b b b b b b b b b b b 1 1 1 1 . c c c c c c c c c c a a a a a a a a a 1 1 c c c c a a a 1 1 1 1 1 1 . . . . . . 
c c c c c c c c c c c c c c c c c f f f f c c c c c c c c c f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 1 c c c c c c c c c c c a a a a a a a a a . c c c c c a a a 1 1 1 1 1 1 1 1 . . . . 
c c c c c c c c c c c c c c c c c f f f c c c c c c c c c f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . c c c c c c c c c c c a a a a a a a a a . c c c c c a a a 1 1 1 1 1 1 1 1 1 1 1 . 
c c c c c c c c c c c c c c c c f f f f c c c c c c c c f f 1 f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . c c c c c c c c c c c a a a a a a a a a a a c c c a a a a a a 1 1 1 . b b b b 1 1 1 1 
c c c c c c c c c c c c c c c f f f f c c c c c c c c c f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c b b b c c c c c c c c c c c a a a a a a a a a a a a c c c a a a a a a 1 1 1 a a a a b b 1 1 1 
c c c c c c c c c c c c c c c f d f f c c c c c c c c f f f 1 f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a 1 1 1 a a a a a b 1 1 1 
c c c c c c c c c c c c c c f f f f c c c c c c c c c f f f 1 f b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c a a a b b b b a a a a a a a a a a a a a a 1 b b b a a a a b b b . 
c c c c c c c c c c c c c c f f f f c c c c c c c c c f f f 1 f b b b b b b b b b b b b b b b b b b b b b b b b c b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b a a a a a a b a a a a a a a a b b b b a a a a a b b 
c c c c c c c c c c c c c f f d f f c c c c c c c c f f c 1 1 f b b b b b b b b b b b b b b b b b b b b b b b c c b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b a a a a a a b b b b b b b b a b b b b b a a a a a . 
c c c c c c c c c c c c f f d f f d c c c c c c c c f c f f f c f b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b c c a a a a c b b b b b b b b b b b b b b a a a a a 
c c c c c c c c c c c c f f d f d d f c c c c c c f f f f f 1 1 1 f b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a 
c c c c c c c c c c c f f d f f f f f c c c c c c f f c f f f f f c f b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a 
c c c c c c c c c c f f d d d f d d f c c c c c c f f c c f f f 1 1 1 f f f b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a 
c c c c c c c c c c f f f f f f d f f c c c c c c f c f f f f f f f f f f f f f f b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c f f f f f f f f f f c c c c c c f c c f f f f f f f f f f f f f f b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c f f f f f f f f d d f c c c c c c f f f c c c f f f f f f f f f f f b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c f c c d d d d d f f c c c c c c c f c c f f f c c c c c d d d d c f b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c f f f f f f f c c c c c c c c c c f f c c c f f f f f f f f f f f c b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c 7 7 7 7 7 7 7 7 7 c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b 7 b b b b 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 b b b b 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
let mySprite8 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 . . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . . 8 6 6 8 . . . . . . . . . . 
. . . . . . . . . f 6 6 6 6 f . . . . . . . . . 
. . . . . . . . f 8 6 6 6 6 8 f . . . . . . . . 
. . . . . . . 8 6 6 6 6 6 6 6 6 8 . . . . . . . 
. . . . . . 8 6 6 8 6 6 6 6 8 6 6 8 . . . . . . 
. . . . . . f 8 8 6 6 6 6 6 6 8 8 f . . . . . . 
. . . . . f 8 8 6 6 8 6 6 8 6 6 8 8 f . . . . . 
. . . . f 8 8 f f 8 8 6 8 8 f f f 8 8 f . . . . 
. . . . f f f f 8 8 f f f 8 8 f 8 f f f . . . . 
. . . . . f 8 f 8 f f 8 f f 8 f 8 8 f . . . . . 
. . . . f 8 8 f f f 8 8 f f f f f 8 f . . . . . 
. . . . f 8 f f f f 8 f f f f f f f f f . . . . 
. . . . f f f 8 8 f f f f f f 8 8 f f f . . . . 
. . . . f 8 6 8 f f f f 8 f f f 8 6 8 f . . . . 
. . . f 6 6 6 f f 8 f 8 6 f 8 f f 6 6 8 . . . . 
. . f 6 6 6 6 8 6 6 8 6 6 f 6 6 8 6 6 6 8 . . . 
. f 6 6 6 8 6 6 6 6 6 6 6 8 6 6 6 6 8 6 6 8 . . 
. f f 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 f . 
. f 8 8 6 6 6 8 6 6 8 6 8 6 6 6 8 6 6 6 8 f f . 
. . f f 6 6 8 8 6 8 f 8 8 f 6 6 8 8 8 6 8 8 f . 
. . f 8 f f 8 8 f f f 8 8 f f 8 f 8 8 f f 8 8 f 
. f 8 8 f f 8 f f 8 f 8 f 8 8 f f f 8 f f f f f 
f 8 8 f f 8 f f 8 8 f f f f 8 8 f f f f 8 f . . 
f f f f 8 8 f 8 8 f f f f f f 8 f 8 f f 8 8 f . 
. f 8 f f f f f f f f f f f f f f 8 8 f f 8 f . 
. f f 6 f f f f f 8 f f 8 f f 6 f f 8 f 6 f f . 
. f 6 6 8 f 6 6 8 6 f f 6 6 f 6 6 6 8 8 6 6 f f 
f 6 6 8 6 6 6 8 6 6 f 6 6 6 8 6 8 6 6 6 8 6 6 f 
f f f 6 6 6 f 6 6 8 8 6 6 6 6 6 6 f 6 6 6 f f . 
. . f f f f 8 6 f 8 6 6 6 8 8 6 6 8 f f f f . . 
. . . . . f 8 f f 6 6 f 8 8 8 f f 8 f . . . . . 
. . . . . . f f f 8 f f f 8 8 f f f f . . . . . 
. . . . . . . . . f f e e f f . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . f e e e f e e f . . . . . . . . 
. . . . . . . . f e f e f f e f . . . . . . . . 
`, SpriteKind.nothing)
let mySprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
8 . . . . . . . . . . f f . . . . . . . . . . . 
6 8 . . . . . . . . f 8 8 f . . . . . . . . . . 
6 8 8 . . . . . . f f 8 8 f f . . . . . . . . . 
6 6 8 . . . . . . f 8 8 8 8 f . . . . . . . . . 
6 6 6 8 . . . . f 8 8 8 8 8 8 f . . . . . . . . 
6 6 6 6 8 8 f f 8 8 8 8 8 8 8 8 f f . . . . . . 
6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . 
6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f f . . . . . 
6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f . . . . . 
6 6 8 8 8 6 6 8 f 8 8 8 8 8 f f f 8 8 f . . . . 
8 6 6 8 6 8 8 8 8 8 f f f 8 8 f 8 f f f . . . . 
8 8 6 8 6 6 8 f 8 f f 8 f f 8 f 8 8 f . . . . . 
8 8 8 8 8 6 8 f f f 8 8 f f f f f 8 f . . . . . 
8 8 8 8 8 8 8 8 f f 8 f f f f f f f f f . . . . 
8 8 8 6 6 8 8 8 8 f f f f f f 8 8 f f f . . . . 
6 8 8 8 6 6 6 8 f f f f 8 f f f 8 8 8 f . . . . 
6 8 6 8 8 6 6 6 8 8 f 8 8 f 8 f f 8 8 8 f . . . 
6 8 6 6 6 6 6 6 8 8 8 8 8 f 8 8 8 8 8 8 f . . . 
6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f . . 
6 6 6 6 6 6 6 6 8 6 8 8 8 8 8 8 8 8 8 8 f 8 f . 
6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f f . 
6 8 6 6 6 6 8 6 6 6 8 8 8 f 8 8 8 8 f 8 8 8 f . 
6 8 8 6 8 6 6 8 8 6 6 8 8 f f 8 f 8 8 f f 8 8 f 
8 6 6 8 8 8 6 8 8 8 8 8 f 8 8 f f f 8 f f f f f 
8 8 6 6 8 8 8 8 6 8 f f f f 8 8 f f f f 8 f . . 
8 8 8 6 8 6 8 8 6 6 8 f f f f 8 f 8 f f 8 8 f . 
8 8 8 8 8 6 6 8 8 6 8 f f f f f f 8 8 f f 8 f . 
6 8 8 6 8 8 6 8 6 8 8 f 8 f f 8 f f 8 f 8 f f . 
6 6 8 6 6 6 6 6 6 6 8 8 8 8 f 8 8 8 8 8 8 8 f f 
6 6 6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f 
6 6 6 6 6 8 6 6 6 8 8 8 8 8 8 8 8 f 8 8 8 f f . 
6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 f f f f . . 
6 6 6 8 8 6 8 f f 8 8 f 8 8 8 f f 8 f . . . . . 
8 6 6 8 8 8 8 f f 8 f f f 8 8 f f f f . . . . . 
e 8 8 . . . . . . f f e e f f . . . . . . . . . 
e e f . . . . . . f e e e e f . . . . . . . . . 
e e f . . . . . . f e e e e f . . . . . . . . . 
f e e f . . . . f e e e f e e f . . . . . . . . 
f f e f . . . . f e f e f f e f . . . . . . . . 
`, SpriteKind.nothing)
let mySprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f . . . . . . . . . . 8 
. . . . . . . . . . f 8 8 f . . . . . . . . 8 6 
. . . . . . . . . f f 8 8 f f . . . . . . 8 8 6 
. . . . . . . . . f 8 8 8 8 f . . . . . . 8 6 6 
. . . . . . . . f 8 8 8 8 8 8 f . . . . 8 6 6 6 
. . . . . . f f 8 8 8 8 8 8 8 8 f f 8 8 6 6 6 6 
. . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 
. . . . . f f 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 
. . . . . f 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 
. . . . f 8 8 f f 8 8 8 8 8 f f 8 6 6 8 8 6 6 6 
. . . . f f f f 8 8 f f f 8 8 f 8 8 8 8 6 6 8 8 
. . . . . f 8 f 8 f f 8 f f 8 f 8 8 6 8 6 8 8 6 
. . . . f 8 8 f f f 8 8 f f f f 8 6 6 8 8 8 6 6 
. . . . f 8 f f f f 8 f f f f f 8 6 8 8 8 8 6 8 
. . . . f f f 8 8 f f f f f f 8 8 8 8 6 6 8 8 8 
. . . . f 8 8 8 f f f f 8 f f f 8 6 6 6 8 8 8 8 
. . . f 8 8 8 f f 8 f 8 8 f 8 8 6 6 6 8 8 6 8 6 
. . f 8 8 8 8 8 8 8 8 8 8 f 8 6 6 6 6 6 6 6 6 6 
. f 8 8 f 8 8 8 8 8 8 8 8 8 6 6 8 6 6 6 6 6 6 6 
. f f f 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 
. f f 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 
. . f f 8 8 f 8 8 8 f 8 8 f 8 8 6 6 8 6 6 6 8 6 
. . f 8 f f 8 8 f f f 8 8 f 8 6 8 8 6 6 8 8 8 6 
. f 8 8 f f 8 f f 8 f 8 f 8 6 6 8 8 6 8 8 6 8 6 
f 8 8 f f 8 f f 8 8 f f 8 6 6 8 8 6 8 8 6 6 8 8 
f f f f 8 8 f 8 8 f f f 8 8 8 8 6 6 8 6 6 8 8 8 
. f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 
. f f 8 8 8 f f 8 8 f f 8 8 8 6 6 6 8 8 6 6 8 8 
. f 8 8 8 f f 8 8 8 f f 8 8 6 6 6 8 8 6 6 6 8 8 
f 8 8 8 8 8 8 8 8 8 f 8 8 6 6 6 6 6 6 6 6 6 8 6 
f f f 8 8 8 f 8 8 8 8 8 8 8 8 6 6 6 8 6 6 6 6 6 
. . f f f f 8 8 f 8 8 8 8 8 8 8 8 8 6 6 8 6 6 6 
. . . . . f 8 f f 8 8 f 8 8 8 f f 8 6 8 8 6 6 8 
. . . . . . f f f 8 f f f 8 8 f f f 8 8 8 6 8 8 
. . . . . . . . . f f e e f f . . . . . . 8 8 e 
. . . . . . . . . f e e e e f . . . . . . f e e 
. . . . . . . . . f e e e e f . . . . . . f e e 
. . . . . . . . f e e e f e e f . . . . f e e e 
. . . . . . . . f e f e f f e f . . . . f e f e 
`, SpriteKind.nothing)
let mySprite2 = sprites.create(img`
. . . . . . . . . b b b b . . . 
. . . . . . b b b d d d d b . . 
. . . . . . b d d d d d d b . . 
. . . . b b d d d d d b b d . . 
. . . . b d d d d d d b b d b . 
. . . . c d d d d d b b d b c . 
. . . b c c b b b b d d b c c . 
. . b b c c c b d d b c c c c . 
. b b d d d b b b b b b c c c c 
. c d d d d d d b d b c c c b c 
. c b d d d b b d b c c c b b c 
c b c c c c b d d b b b b b c c 
c c b b b d d b c c b b b b c c 
c c c c c c c c c b b b b c c . 
. c c c c b b b b b b b c c . . 
. . . . c c c c c c c c . . . . 
`, SpriteKind.nothing)
let mySprite = sprites.create(img`
. . b d b . . . . . b b b b . . 
. c b d d b . . . b b d d d b . 
. b c c b . . . b c d d d d b . 
. . . . . . b b c c b d b b b . 
. . . . . b d d b c c b b b c . 
. . b b b c d d b b c c c c . . 
. b d d d b c b b c . . . . . . 
c b d d d d c c c c . b b b . . 
c c b b b b c c c . b d d d b . 
. c c c b b . . b c b b d d b b 
. b b . . . . . b c c b b b b . 
b d d b b . . . . . c c c b . . 
b b d d b c . . b b b b b b b . 
. b c c c b . b d d d b b c b . 
. . . . . . b d d d b c c b . . 
. . . . . . b b b c c c b . . . 
`, SpriteKind.nothing)
let mySprite4 = sprites.create(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, SpriteKind.nothing)
let mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
8 . . . . . . . . . . f f . . . . . . . . . . 8 
6 8 . . . . . . . . f 8 8 f . . . . . . . . 8 6 
6 8 8 . . . . . . f f 8 8 f f . . . . . . 8 8 6 
6 6 8 . . . . . . f 8 8 8 8 f . . . . . . 8 6 6 
6 6 6 8 . . . . f 8 8 8 8 8 8 f . . . . 8 6 6 6 
6 6 6 6 8 8 f f 8 8 8 8 8 8 8 8 f f 8 8 6 6 6 6 
6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 
6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 
6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 6 6 6 6 6 6 
6 6 8 8 8 6 6 8 f 8 8 8 8 8 f f 8 6 6 8 8 6 6 6 
8 6 6 8 6 8 8 8 8 8 f f f 8 8 f 8 8 8 8 6 6 8 8 
8 8 6 8 6 6 8 f 8 f f 8 f f 8 f 8 8 6 8 6 8 8 6 
8 8 8 8 8 6 8 f f f 8 8 f f f f 8 6 6 8 8 8 6 6 
8 8 8 8 8 8 8 8 f f 8 f f f f f 8 6 8 8 8 8 6 8 
8 8 8 6 6 8 8 8 8 f f f f f f 8 8 8 8 6 6 8 8 8 
6 8 8 8 6 6 6 8 f f f f 8 f f f 8 6 6 6 8 8 8 8 
6 8 6 8 8 6 6 6 8 8 f 8 8 f 8 8 6 6 6 8 8 6 8 6 
6 8 6 6 6 6 6 6 8 8 8 8 8 f 8 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 8 8 8 8 8 6 6 8 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 8 6 8 8 8 8 8 8 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 8 8 8 8 8 8 6 6 6 6 6 6 6 6 6 
6 8 6 6 6 6 8 6 6 6 8 8 8 f 8 8 6 6 8 6 6 6 8 6 
6 8 8 6 8 6 6 8 8 6 6 8 8 f 8 6 8 8 6 6 8 8 8 6 
8 6 6 8 8 8 6 8 8 8 8 8 f 8 6 6 8 8 6 8 8 6 8 6 
8 8 6 6 8 8 8 8 6 8 f f 8 6 6 8 8 6 8 8 6 6 8 8 
8 8 8 6 8 6 8 8 6 6 8 f 8 8 8 8 6 6 8 6 6 8 8 8 
8 8 8 8 8 6 6 8 8 6 8 f f 8 8 8 8 8 8 8 8 8 8 8 
6 8 8 6 8 8 6 8 6 8 8 f 8 8 8 6 6 6 8 8 6 6 8 8 
6 6 8 6 6 6 6 6 6 6 8 8 8 8 6 6 6 8 8 6 6 6 8 8 
6 6 6 6 6 6 6 6 6 6 6 8 8 6 6 6 6 6 6 6 6 6 8 6 
6 6 6 6 6 8 6 6 6 8 8 8 8 8 8 6 6 6 8 6 6 6 6 6 
6 6 6 6 6 6 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 6 6 6 
6 6 6 8 8 6 8 f f 8 8 f 8 8 8 f f 8 6 8 8 6 6 8 
8 6 6 8 8 8 8 f f 8 f f f 8 8 f f f 8 8 8 6 8 8 
e 8 8 . . . . . . f f e e f f . . . . . . 8 8 e 
e e f . . . . . . f e e e e f . . . . . . f e e 
e e f . . . . . . f e e e e f . . . . . . f e e 
f e e f . . . . f e e e f e e f . . . . f e e e 
f f e f . . . . f e f e f f e f . . . . f e f e 
`, SpriteKind.nothing)
let mySprite3 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 6 6 . . . . . . . . . . . 
. . . . . . . . . . 6 7 7 6 . . . . . . . . . . 
. . . . . . . . . . 6 7 7 6 . . . . . . . . . . 
. . . . . . . . . 8 7 7 7 7 8 . . . . . . . . . 
. . . . . . . . 8 6 7 7 7 7 6 8 . . . . . . . . 
. . . . . . . 6 7 7 7 7 7 7 7 7 6 . . . . . . . 
. . . . . . 6 7 7 6 7 7 7 7 6 7 7 6 . . . . . . 
. . . . . . 8 6 6 7 7 7 7 7 7 6 6 8 . . . . . . 
. . . . . 8 6 6 7 7 6 7 7 6 7 7 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 7 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 7 6 8 8 8 8 6 8 8 8 6 7 6 8 . . . . 
. . . 8 7 7 7 8 8 6 8 6 7 8 6 8 8 7 7 6 . . . . 
. . 8 7 7 7 7 6 7 7 6 7 7 8 7 7 6 7 7 7 8 . . . 
. 8 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 6 7 7 8 . . 
. 8 8 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 8 . 
. 8 6 6 7 7 7 6 7 7 6 7 6 7 7 7 6 7 7 7 6 8 8 . 
. . 8 8 7 7 6 6 7 6 8 6 6 8 7 7 6 6 6 7 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 7 8 8 8 8 8 6 8 8 6 8 8 7 8 8 6 8 7 8 8 . 
. 8 7 7 6 8 7 7 6 7 8 8 7 7 8 7 7 7 6 6 7 7 8 8 
8 7 7 6 7 7 7 6 7 7 8 7 7 7 6 7 6 7 7 7 6 7 7 8 
8 8 8 7 7 7 8 7 7 6 6 7 7 7 7 7 7 8 7 7 7 8 8 . 
. . 8 8 8 8 6 7 8 6 7 7 7 6 6 7 7 6 8 8 8 8 . . 
. . . . . 8 6 8 8 7 7 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . f e e e f e e f . . . . . . . . 
. . . . . . . . f e f e f f e f . . . . . . . . 
`, SpriteKind.nothing)
let mySprite9 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . b b b b b . . . . . . . . . . . . . . 
. . . . b 3 3 3 3 3 b b . . . . . . . . . . . . 
. . . b 3 3 3 3 1 1 1 3 b . . . . . . . . . . . 
. . . b 3 3 3 3 1 1 1 1 3 b . . . . . . . . . . 
. . b 1 1 3 3 3 3 1 1 1 3 b c . . . . . . . . . 
. b 1 1 1 3 3 3 3 3 3 3 3 b b b . . . . . . . . 
b b 1 1 3 3 1 1 3 3 3 3 b b b c . b b b b . . . 
c b b 3 3 1 1 1 1 3 b b d d b c b 3 3 1 1 b . . 
c b b b b d d d d b b d d d c b b 3 3 1 1 3 c . 
. c b b b b d d b b b d d b b d d b 3 3 3 3 b c 
. . c c b b b b b b b b c c b d d b b b d d b c 
. . . . c c c c c c c b . c c b b b b b d d b c 
. . . . . . b 1 d d b . . . . c c b b b b b c . 
. . . . . b 1 1 d d b . . . . . b c c c c c . . 
. . . . . b 1 d d b b . . . . . b d d b . . . . 
`, SpriteKind.nothing)
mySprite.setPosition(149, 109)
mySprite8.setPosition(148, 60)
mySprite9.setPosition(48, 110)
mySprite7.setPosition(64, 60)
mySprite6.setPosition(40, 60)
mySprite2.setPosition(104, 82)
mySprite5.setPosition(52, 60)
mySprite4.setPosition(83, 109)
mySprite3.setPosition(88, 64)
game.onUpdateInterval(Math.randomRange(2000, 40000), function () {
    Tree_Speed = -75 - game.runtime() / 250
    Tree = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 6 6 . . . . . . . . . . . 
. . . . . . . . . . 6 7 7 6 . . . . . . . . . . 
. . . . . . . . . . 6 7 7 6 . . . . . . . . . . 
. . . . . . . . . 8 7 7 7 7 8 . . . . . . . . . 
. . . . . . . . 8 6 7 7 7 7 6 8 . . . . . . . . 
. . . . . . . 6 7 7 7 7 7 7 7 7 6 . . . . . . . 
. . . . . . 6 7 7 6 7 7 7 7 6 7 7 6 . . . . . . 
. . . . . . 8 6 6 7 7 7 7 7 7 6 6 8 . . . . . . 
. . . . . 8 6 6 7 7 6 7 7 6 7 7 6 6 8 . . . . . 
. . . . 8 6 6 8 8 6 6 7 6 6 8 8 8 6 6 8 . . . . 
. . . . 8 8 8 8 6 6 8 8 8 6 6 8 6 8 8 8 . . . . 
. . . . . 8 6 8 6 8 8 6 8 8 6 8 6 6 8 . . . . . 
. . . . 8 6 6 8 8 8 6 6 8 8 8 8 8 6 8 . . . . . 
. . . . 8 6 8 8 8 8 6 8 8 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 6 6 8 8 8 8 8 8 6 6 8 8 8 . . . . 
. . . . 8 6 7 6 8 8 8 8 6 8 8 8 6 7 6 8 . . . . 
. . . 8 7 7 7 8 8 6 8 6 7 8 6 8 8 7 7 6 . . . . 
. . 8 7 7 7 7 6 7 7 6 7 7 8 7 7 6 7 7 7 8 . . . 
. 8 7 7 7 6 7 7 7 7 7 7 7 6 7 7 7 7 6 7 7 8 . . 
. 8 8 6 6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 7 7 8 . 
. 8 6 6 7 7 7 6 7 7 6 7 6 7 7 7 6 7 7 7 6 8 8 . 
. . 8 8 7 7 6 6 7 6 8 6 6 8 7 7 6 6 6 7 6 6 8 . 
. . 8 6 8 8 6 6 8 8 8 6 6 8 8 6 8 6 6 8 8 6 6 8 
. 8 6 6 8 8 6 8 8 6 8 6 8 6 6 8 8 8 6 8 8 8 8 8 
8 6 6 8 8 6 8 8 6 6 8 8 8 8 6 6 8 8 8 8 6 8 . . 
8 8 8 8 6 6 8 6 6 8 8 8 8 8 8 6 8 6 8 8 6 6 8 . 
. 8 6 8 8 8 8 8 8 8 8 8 8 8 8 8 8 6 6 8 8 6 8 . 
. 8 8 7 8 8 8 8 8 6 8 8 6 8 8 7 8 8 6 8 7 8 8 . 
. 8 7 7 6 8 7 7 6 7 8 8 7 7 8 7 7 7 6 6 7 7 8 8 
8 7 7 6 7 7 7 6 7 7 8 7 7 7 6 7 6 7 7 7 6 7 7 8 
8 8 8 7 7 7 8 7 7 6 6 7 7 7 7 7 7 8 7 7 7 8 8 . 
. . 8 8 8 8 6 7 8 6 7 7 7 6 6 7 7 6 8 8 8 8 . . 
. . . . . 8 6 8 8 7 7 8 6 6 6 8 8 6 8 . . . . . 
. . . . . . 8 8 8 6 8 8 8 6 6 8 8 8 8 . . . . . 
. . . . . . . . . 8 8 e e 8 8 . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . . f e e e e f . . . . . . . . . 
. . . . . . . . f e e e f e e f . . . . . . . . 
. . . . . . . . f e f e f f e f . . . . . . . . 
`, -75, 0)
    Tree.setPosition(148, 89)
    info.changeScoreBy(30)
})
game.onUpdate(function () {
    if (Sonic.y < 89) {
        Sonic.ay = 450
    } else {
        Sonic.ay = 0
        Sonic.vy = 0
    }
})
game.onUpdateInterval(Math.randomRange(2000, 5000), function () {
    Rock_Speed = -75 - game.runtime() / 225
    Rock = sprites.createProjectileFromSide(img`
. . . . . c c b b b . . . . . . 
. . . . c b d d d d b . . . . . 
. . . . c d d d d d d b b . . . 
. . . . c d d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. . . c b b d d d d d d d b . . 
. c c c c b b b b d d d b b b . 
. c d d b c b b b b b b b b d b 
c b b d d d b b b b b d d b d b 
c c b b d d d d d d d b b b d c 
c b c c c b b b b b b b d d c c 
c c b b c c c c b d d d b c c b 
. c c c c c c c c c c c b b b b 
. . c c c c c b b b b b b b c . 
. . . . . . c c b b b b c c . . 
. . . . . . . . c c c c . . . . 
`, -75, 0)
    Rock.setPosition(148, 97)
    info.changeScoreBy(10)
})
game.onUpdateInterval(Math.randomRange(2000, 9000), function () {
    Missile_Speed = -75 - game.runtime() / 175
    Missile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . f f f f f f f f . . . f c c f . . . . . . . . . . 
. . . . . f f c c c c c c c c f . f c b f f . . . . . . . . . . 
. . . f f c c b b b b b b b b c f c b 1 f f . 4 4 4 . . . . . . 
. . f 2 c b b 1 1 1 1 1 1 1 1 1 c b 1 1 f f f 1 1 5 4 4 . . . . 
. f 2 2 b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f b f 1 1 1 5 4 4 4 4 . 
f 5 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f 1 1 1 1 5 1 5 4 4 
f 1 4 2 1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1 1 c c 1 1 1 1 1 1 1 1 1 
f 2 4 2 b b 1 1 1 1 1 1 1 1 b b b f 1 1 1 c f 1 1 1 1 1 1 5 5 5 
f 2 2 2 c c b b 1 1 1 1 1 b c c c f f f f f f 1 1 1 1 5 5 5 4 4 
. f 2 4 c c c c b b b b b c c c c c c f f b f 1 1 5 5 1 4 4 4 . 
. . f 2 f c c c c c c c c c c f c c c c f f f 5 5 5 4 4 . . . . 
. . . f f f f c c c c c c c f f f f f c c f . 4 4 4 . . . . . . 
. . . . . f f f f f f f f f f f . f f f c c . . . . . . . . . . 
. . . . . . . f f f f f f f f . . . f f f c . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, -125, 0)
    Missile.setPosition(152, Math.randomRange(50, 60))
    info.changeScoreBy(15)
})
