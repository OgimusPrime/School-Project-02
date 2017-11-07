var game = new Phaser.Game(800, 450, Phaser.AUTO, '', null, false, false);
game.state.add('gameState', TexarkanaJohn.gameState);
game.state.add('gameOverState', TexarkanaJohn.gameOverState);
game.state.add('gameWinState',TexarkanaJohn.gameWinState);
game.state.add('gameState', TexarkanaJohn.gameState);
game.state.add('gameStartState', TexarkanaJohn.gameStartState);
game.state.add('helpState', TexarkanaJohn.helpState);
game.state.add('bossState', TexarkanaJohn.bossState);
game.state.start('gameStartState');
