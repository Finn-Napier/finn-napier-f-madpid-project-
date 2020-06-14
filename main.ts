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
let Missile: Sprite = null
scene.setBackgroundColor(9)
let Sonic = sprites.create(img`
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
Sonic.setPosition(15, 80)
game.onUpdateInterval(2000, function () {
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
`, -100, 0)
    Missile.setPosition(153, 88)
})
