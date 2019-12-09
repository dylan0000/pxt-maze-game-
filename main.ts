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
5 1 1 1 1 1 1 1 1 1 1 1 1 5 1 5 5 1 1 1 1 1 1 1 1 5 1 1 1 1 1 5 
5 5 5 5 5 5 5 5 5 1 5 1 5 5 1 1 1 1 5 5 5 5 5 5 1 5 1 5 1 1 1 5 
5 1 1 1 1 5 5 5 5 1 5 1 5 5 1 5 5 1 1 1 1 5 1 1 1 5 1 5 1 1 1 5 
5 1 5 5 1 1 1 1 5 1 5 1 1 5 1 5 1 5 5 5 1 5 5 5 5 5 1 5 5 1 1 5 
5 1 5 5 5 5 5 1 5 1 5 5 1 5 1 5 1 1 1 1 1 1 1 1 1 5 1 1 1 5 5 5 
5 1 5 5 1 1 1 1 5 1 1 5 1 1 1 5 1 5 5 5 5 1 5 5 1 5 5 5 1 1 1 5 
5 1 1 5 1 5 5 1 5 5 1 5 5 5 1 1 5 5 1 1 1 1 5 1 1 1 1 1 5 5 1 5 
5 5 1 5 1 5 5 1 1 5 1 1 1 1 5 1 1 5 1 1 5 5 5 5 5 5 1 1 5 1 1 5 
5 5 1 5 1 1 5 5 1 1 1 5 5 1 5 1 1 5 1 5 5 1 5 1 1 1 5 1 1 1 1 5 
5 1 1 5 1 1 5 5 5 5 1 5 5 1 1 5 1 5 5 1 5 1 5 5 5 1 5 5 5 5 5 5 
5 1 5 5 1 1 1 1 1 1 1 1 1 5 1 5 1 1 1 1 1 1 1 1 1 1 5 1 1 5 1 5 
5 1 1 1 1 5 5 5 1 5 5 5 1 5 1 5 5 5 5 1 5 1 5 1 5 5 5 5 1 5 1 5 
5 1 5 5 5 5 1 5 1 5 1 5 1 5 1 1 1 1 1 1 5 1 5 1 5 1 1 1 1 5 1 5 
5 1 1 1 1 1 1 5 1 5 1 1 1 1 5 5 1 1 5 1 5 5 5 5 5 1 5 5 5 5 1 5 
5 5 5 5 5 5 1 5 1 5 5 5 5 1 1 5 1 5 5 5 1 1 5 1 1 1 5 1 1 1 1 5 
5 1 5 5 1 5 1 5 1 1 1 1 5 1 5 5 5 5 5 1 1 5 5 1 5 5 5 1 5 5 5 5 
5 1 5 5 1 5 5 5 1 5 5 1 5 1 1 1 1 1 5 1 5 1 1 1 1 1 1 1 5 1 1 5 
5 1 5 5 1 1 1 1 1 5 1 1 1 1 5 5 5 1 1 1 5 1 5 5 5 5 1 1 5 5 1 5 
5 1 5 1 1 5 5 5 5 5 5 5 1 5 5 1 5 5 1 5 5 5 5 1 1 1 1 1 5 1 1 5 
5 1 5 5 1 5 1 5 1 1 1 1 1 1 5 1 1 1 1 1 5 5 1 1 1 5 5 5 5 1 5 5 
5 1 1 1 1 5 5 5 5 1 5 5 5 1 5 1 5 5 5 1 1 1 1 5 5 5 1 1 5 1 1 5 
5 1 5 5 5 5 1 1 5 1 5 1 5 1 5 1 1 1 1 1 5 1 5 5 1 1 1 1 5 5 1 5 
5 5 5 1 1 1 5 5 5 5 5 1 1 1 5 5 5 5 5 5 5 1 1 1 1 5 5 1 1 1 1 5 
5 1 1 1 5 1 1 1 5 1 1 1 5 5 5 1 1 1 5 1 1 1 1 5 5 1 5 5 1 5 1 5 
5 1 5 5 5 1 5 5 5 1 5 5 5 1 1 1 5 1 5 5 5 1 1 1 5 5 1 5 1 1 1 5 
5 1 5 1 1 1 1 1 1 1 5 1 1 5 5 5 1 1 1 1 5 5 5 1 5 1 5 5 5 5 5 5 
5 1 5 1 5 5 5 5 5 1 5 1 5 1 1 1 5 1 5 5 5 1 5 1 1 1 1 1 1 1 1 5 
5 1 5 1 1 1 1 1 5 1 5 1 5 1 5 1 5 1 5 1 5 1 5 1 5 1 5 5 1 1 1 5 
5 1 5 1 5 5 5 1 5 5 5 5 5 1 5 1 5 1 5 1 5 1 5 5 5 1 5 1 5 5 5 5 
5 1 5 1 5 1 1 1 1 1 1 1 1 1 5 1 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
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
controller.moveSprite(mySprite, 200, 200)
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
