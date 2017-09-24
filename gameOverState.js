var gameOverState = {
    preload: function () {
        game.load.image('gameOver', 'assets/sprites/GameOverScreen.png');
        game.load.spritesheet('button', 'assets/sprites/retryButton.png', 320, 168);

    },

    create: function () {
        game.stage.backgroundColor = '#000000';
        var gameOverSprite;

        gameOverSprite = game.add.sprite(250,200,'gameOver');
        
        button = game.add.button(game.world.centerX - 320, 400, 'button', this.actionOnClick);
        button.onInputOver.add(this.over);
        button.onInputDown.add(this.down);
        button.onInputOut.add(this.out);

    },

    over: function () {
    
    button.tint = 0x66ff66;
},
    
    down: function(){
        
        button.tint = 0x00ff00;
    },
    
    out: function(){
        
      button.tint = 0xFFFFFF; 
    },
    
    update: function () {

    },

    actionOnClick: function () {
        location.reload();
    }
};
