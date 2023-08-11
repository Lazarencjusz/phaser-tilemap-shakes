import { AssetTilemapKey } from '@app/assets/tilemap';
import { AsseTilesetImageKey } from '@app/assets/tilesetImage';
import { AssetLoader } from '@app/utils/AssetLoader';
import { Play } from './Play';

export class Preload extends Phaser.Scene {
  static key = 'Preload Scene';

  constructor() {
    super(Preload.key);
  }

  preload = () => {
    AssetLoader.setScene(this);

    AssetLoader.loadTilesetImage(AsseTilesetImageKey.grassRoad);
    AssetLoader.loadTiledMapJson(AssetTilemapKey.testMap1);
  };

  create = () => {
    this.scene.run(Play.key);
  };
}
