'use strict';
var menu = function() {};
menu.prototype = {
  preload: function() {
    this.gameMode = 0 ;
  },
  create: function() {
    var style = { font: '65px Arial', fill: 'black', align: 'center'};

    var bg = this.add.sprite(0, 0, 'arena');
    bg.anchor.set(0.5);
    bg.scale.setTo(3,3);

    this.titleText = this.game.add.text(this.game.world.centerX, 80, 'Tic-Tac-Toe', style);
    this.titleText.anchor.setTo(0.5, 1);

    this.gameModeButton = this.game.add.button(this.game.world.centerX, 180, 'single_player', this.modeChoose, this, 1, 0, 2);
    this.gameModeButton.anchor.set(0.5);

    this.gameModeButton = this.game.add.button(this.game.world.centerX, 280, 'double_player', this.modeChoose, this, 1, 0, 2);
    this.gameModeButton.anchor.set(0.5);

    // this.instructionsText = this.game.add.text(this.game.world.centerX, 180, '1 Player', { font: '16px Arial', fill: 'black', align: 'center'});
    // this.instructionsText.anchor.setTo(0.5, 0.5);
    //
    // this.instructionsText = this.game.add.text(this.game.world.centerX, 280, '2 Player', { font: '16px Arial', fill: 'black', align: 'center'});
    // this.instructionsText.anchor.setTo(0.5, 0.5);

    console.log(this.game.input.currentPointers);
  },
  update: function() {
    if(this.gameMode !== 0) {
      this.game.state.start('play');
    }
  },
  modeChoose: function() {
    this.gameMode = 1 ;
  }
};
