export const AnimKey = {
    fly: "fly",
  } as const;
  
  export type AnimKey = (typeof AnimKey)[keyof typeof AnimKey];
  