import { AssetImageKey, AssetImagePath } from '@app/assets/images';
import { AssetTilemapKey, AssetTilemapPath } from '@app/assets/tilemap';
import {
  AsseTilesetImageKey,
  AsseTilesetImagePath,
} from '@app/assets/tilesetImage';

const sceneIsDefined = (
  scene: Phaser.Scene | undefined,
): scene is Phaser.Scene => {
  if (!scene) {
    throw 'You need to add Phaser.Scene to AssetManager';
  }
  return !!scene;
};

export class AL {
  #_scene: Phaser.Scene;
  // TODO: check if asset is already creted and do not load it
  // TODO: check if assets can be loaded per scene not per whole app
  // TODO: check how to create level loader - that loads more assets
  #assets: { [type: string]: boolean };

  setScene = (scene: Phaser.Scene) => {
    this.#_scene = scene;
  };

  loadTiledMapJson = (key: AssetTilemapKey) => {
    return this.#scene.load.tilemapTiledJSON(key, AssetTilemapPath[key]);
  };

  loadImage = (key: AssetImageKey) =>
    this.#scene.load.image(key, AssetImagePath[key]);

  loadTilesetImage = (key: AsseTilesetImageKey) =>
    this.#scene.load.image(key, AsseTilesetImagePath[key]);

  get #scene() {
    sceneIsDefined(this.#_scene);
    return this.#_scene;
  }
}

export const AssetLoader = new AL();
