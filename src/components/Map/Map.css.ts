import { globalStyle, style } from '@vanilla-extract/css';

export const mapContainer = style({
  // selectors: {
  //   '& path:hover': { fill: 'green' },
  // },
});

globalStyle(`${mapContainer} > .state:hover`, {
  cursor: 'pointer',
  fill: 'green',
});

export const container = style({});
