import crystal from '@assets/tileset/map_1.json';

export const AssetTilemapKey = {
  testMap1: 'testMap1',
} as const;

export type AssetTilemapKey =
  (typeof AssetTilemapKey)[keyof typeof AssetTilemapKey];

export const AssetTilemapPath: Record<AssetTilemapKey, string> = {
  [AssetTilemapKey.testMap1]: crystal,
};
