* install `node` and `npm`

* run `npm install`

* `npm start`

* Development builds will copy `phaser.min.js` together with `phaser.map` and `phaser.js`
  Your ES6 code will be transpiled into ES5 and concatenated into a single file.

* Output file name is configurable in `gulpfile.js` . Currently it is `game.js` but can be anything.
Include this final file in your `index.html`.

* Production env will only copy `phaser.min.js` and also uglify your code.

* `watch` is also enabled in development mode. So any changes in `.js` file will trigger a refresh.
Specifically Watches for changes in files inside the `./src` folder. and `./static` folder.
Any other folder is not watched.

* `Phaser` is now added via `package.json` . Deleted the phaser file from `src`

* GAME SPEC : https://docs.google.com/document/d/1YCI3_Ps_Q9Cnpsg0XJLLgOKV6_WcIEg5UbHlxeaW-mY/