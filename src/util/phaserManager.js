'use strict';

var phaserManager = {// TODO : very basic text util . not a phaser Manager // intend to add more functionality in future
    createText: function (game, obj) {
        let textStyle = {
            font: obj.font,
            fontSize: obj.fontSize,
            align: obj.align,
            fill: obj.fill,
            fontWeight: obj.fontWeight,
            wordWrapWidth: obj.wordWrapWidth,
            backgroundColor: obj.backgroundColor
        };

        let _anchorX = (obj.anchorX === undefined ) ? 0 : obj.anchorX;
        let _anchorY = (obj.anchorY === undefined ) ? 0 : obj.anchorY;

        let text = game.add.text(obj.positionX, obj.positionY, obj.message, textStyle);
        text.anchor.setTo(_anchorX, _anchorY);

        return text;
    }
};

export default phaserManager;