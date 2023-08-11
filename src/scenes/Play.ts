import { TestMap1 } from '@app/maps/TestMap';

export class Play extends Phaser.Scene {
  static key = 'Play Scene';

  #map: TestMap1;
  #cameraControls: Phaser.Cameras.Controls.SmoothedKeyControl;
  constructor() {
    super(Play.key);
  }

  preload = () => {};

  create() {
    this.#map = new TestMap1(this);

    this.#createEvents();
  }
  #createEvents = () => {
    const cursors = this.input.keyboard.createCursorKeys();

    const controlConfig = {
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      acceleration: 0.3,
      drag: 0.0017,
      maxSpeed: 0.75,
    };

    this.#cameraControls = new Phaser.Cameras.Controls.SmoothedKeyControl(
      controlConfig,
    );
  };

  update = (time: number, delta: number) => {
    this.#cameraControls.update(delta);
  };
}
