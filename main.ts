sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        mysprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    }
    otherSprite.destroy(effects.disintegrate, 500)
    info.startCountdown(10)
})
let mysprite2: Sprite = null
// map
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 4 4 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 4 4 4 e 4 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 4 4 4 e 4 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 5 
5 7 7 7 7 7 4 4 4 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 e 7 7 7 7 7 7 5 
5 7 7 7 7 4 4 4 4 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 4 4 4 4 4 7 8 8 b b 7 7 7 7 7 7 7 7 7 7 7 4 4 4 7 7 5 
5 7 7 7 7 7 4 4 4 7 7 7 8 b b b 7 7 7 7 7 7 7 7 7 7 4 7 7 7 7 5 
5 7 7 7 7 7 7 e 7 7 7 7 8 b b b 7 7 7 7 7 7 7 7 4 7 7 7 7 7 7 5 
5 7 7 7 7 4 7 e 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 4 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 8 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 4 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 4 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 4 4 4 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 7 3 3 3 3 7 7 7 7 7 7 7 7 4 4 4 4 4 7 5 
5 7 4 4 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 4 4 4 4 7 7 5 
5 4 4 4 4 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 e 7 7 7 5 
5 4 4 4 4 7 7 7 7 7 7 7 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 e 7 7 7 5 
5 7 4 4 4 7 7 7 7 7 7 7 7 7 8 c c 8 8 7 7 7 7 7 4 4 7 7 7 7 7 5 
5 7 7 e 7 7 7 7 7 4 7 7 7 8 c c c c 8 7 7 7 7 4 4 4 7 7 7 7 7 5 
5 7 7 e 7 7 7 7 4 4 4 7 8 c c c b c 8 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 8 c c b b c 8 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 7 7 7 7 7 7 7 7 7 7 8 c b b b b 8 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
// when turned on, player cannot move to this color.
// there is a color texture to add to the yellow
scene.setTile(5, img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, true)
// water
scene.setTile(8, img`
7 8 8 8 7 8 8 8 8 8 8 8 8 8 8 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 7 
7 7 7 8 8 8 8 8 8 8 8 8 7 7 7 7 
7 7 7 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 8 7 8 8 8 8 8 8 8 8 8 7 7 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 7 
7 7 8 8 8 8 8 8 8 8 8 8 7 8 8 7 
7 7 7 7 8 8 8 8 8 8 8 8 8 8 8 7 
7 7 8 7 8 8 8 8 8 8 8 8 7 7 7 7 
7 8 8 7 7 7 8 8 8 8 8 7 7 8 7 7 
7 8 8 8 7 7 8 8 8 8 8 8 8 8 8 7 
7 8 8 8 8 8 8 8 8 8 8 8 8 8 8 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 8 7 
7 7 7 7 8 7 7 8 8 8 8 8 8 7 7 7 
7 7 8 7 7 7 8 8 8 8 8 8 8 8 7 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
`, true)
// bridge
scene.setTile(3, img`
. . . . . . . . . . . . . . . . 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
8 d d 8 d d 8 d d 8 d d 8 d d 8 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
. . . . . . . . . . . . . . . . 
`, false)
// bridge
scene.setTile(12, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
// Design of sprite
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . 5 5 5 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// controls the sprite
controller.moveSprite(mySprite, 150, 150)
// see where you are when you are moving
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 40; index++) {
    mysprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . . 4 4 f f f f f f 4 4 . . . 
. . 4 4 f f f 2 2 f f f 4 4 . . 
. . 4 f f 2 2 2 2 2 2 f f 4 . . 
. . 4 f 2 2 2 2 2 2 2 2 f 4 . . 
. . 4 f 2 2 7 2 2 7 2 2 f 4 . . 
. . 4 f 2 2 2 2 2 2 2 2 f 4 . . 
. . 4 f 2 2 2 2 2 2 2 2 f 4 . . 
. . 4 f 2 2 2 2 2 2 2 2 f 4 . . 
. . 4 f 2 2 2 2 2 2 2 2 f 4 . . 
. . 4 f 2 2 f f f f 2 2 f 4 . . 
. . 4 f f f 4 4 4 4 f f f 4 . . 
. . 4 4 4 4 4 . . 4 4 4 4 4 . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    mysprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    mySprite.z = 1
}
info.startCountdown(10)
