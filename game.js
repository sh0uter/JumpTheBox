
var box
var boy
var game = new Phaser.Game(
            800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload()
{
    game.load.image('sky', 'assets/sky.png');
    game.load.image('box', 'assets/box.png');
    game.load.image('boy', 'assets/boy.png');
    
}
function create() 
{
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    box = game.add.sprite(game.world.centerX, 550, 'box')
    boy = game.add.sprite(100, 0, 'boy')
    
    
    game.physics.arcade.enable(boy);
    boy.body.acceleration.y = 100;
    boy.body.bounce.y = 0.2;
    boy.body.gravity.y = 800;
    boy.body.collideWorldBounds = true;
    boy.body.drag.x = 70;
    boy.anchor.setTo(.5,.5);
    
}
function update()
{
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        boy.body.velocity.x = -100;
        boy.scale.x = -1;
    }else if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        boy.body.velocity.x = 100;
        boy.scale.x = 1;
    }
    
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        boy.body.velocity.y = -100;
    }
    
}