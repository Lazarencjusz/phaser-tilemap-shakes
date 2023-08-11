import sky from '@assets/sky.png';

export const AssetImageKey = {
  sky: 'sky',
} as const;

export type AssetImageKey = (typeof AssetImageKey)[keyof typeof AssetImageKey];

export const AssetImagePath: Record<AssetImageKey, string> = {
  [AssetImageKey.sky]: sky,
};
