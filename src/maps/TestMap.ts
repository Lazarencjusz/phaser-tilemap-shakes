import { AssetTilemapKey } from '@app/assets/tilemap';
import { ObjectLayers } from './types/ObjectLayers';
import { TiledLayers } from './types/TiledLayers';
import { TiledTileset } from './types/TiledTileset';
import { AsseTilesetImageKey } from '@app/assets/tilesetImage';

export class TestMap1 {
  #map: Phaser.Tilemaps.Tilemap;
  #tileset1: Phaser.Tilemaps.Tileset;
  #layers: Record<TiledLayers, Phaser.Tilemaps.TilemapLayer>;
  #objects: Record<ObjectLayers, Phaser.Tilemaps.ObjectLayer>;

  get mapOffset() {
    return this.#widthInPixels > this.#bodyOffset
      ? this.#widthInPixels - this.#bodyOffset
      : 0;
  }

  getLayer = (layer: TiledLayers) => {
    return this.#layers[layer];
  };

  getObject = (layer: ObjectLayers) => {
    return this.#objects[layer];
  };

  constructor(private scene: Phaser.Scene) {
    this.#init();
  }

  #init = () => {
    this.#map = this.scene.make.tilemap({
      key: AssetTilemapKey.testMap1,
      // tileWidth: 64,
      // tileHeight: 32,
    });

    this.#createTilesets();
    this.#createLayers();
  };

  get #widthInPixels() {
    return this.#map.widthInPixels;
  }

  get #bodyOffset() {
    return document.body.offsetWidth;
  }

  #createLayers = () => {
    this.#layers = {
      [TiledLayers.ground]: this.#map.createLayer(
        TiledLayers.ground,
        this.#tileset1,
      ),
    };
  };

  #createTilesets = () => {
    this.#tileset1 = this.#map.addTilesetImage(
      TiledTileset.grassRoad,
      AsseTilesetImageKey.grassRoad,
    );
  };
}
