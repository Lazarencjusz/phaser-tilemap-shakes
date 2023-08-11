import grassRoad from '@assets/tileset/grass_road.png';

export const AsseTilesetImageKey = {
  grassRoad: 'grassRoad',
} as const;

export type AsseTilesetImageKey =
  (typeof AsseTilesetImageKey)[keyof typeof AsseTilesetImageKey];

export const AsseTilesetImagePath: Record<AsseTilesetImageKey, string> = {
  [AsseTilesetImageKey.grassRoad]: grassRoad,
};
