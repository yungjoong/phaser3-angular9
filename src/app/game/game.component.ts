import { Component, OnInit } from '@angular/core';
class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main' });
  }
  text: Phaser.GameObjects.Text;
  create() {
    this.text = this.add.text(0, this.cameras.main.centerY, "Hello World");
  }
  preload() {
    ;
  }
  update() {
    this.text.x += 1;
  }
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  constructor() {
    this.config = {
      type: Phaser.AUTO,
      height: 600,
      width: 800,
      parent: 'gameContainer'
    };
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
    this.phaserGame.scene.add('main', MainScene, true);
  }
}