import { Play, Preload } from '../scenes';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1400,
  height: 800,
  physics: {
    default: 'arcade',

    arcade: {
      debug: true,
    },
  },
  scene: [Preload, Play],
};
