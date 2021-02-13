export const desktopBreakpoint = '1024px';

export const mobileVw = (px) => `${(px / 320) * 100}vw`;

export const desktopVw = (px) => `${(px / 1920) * 100}vw`;

export const ease = {
  expo: 'cubic-bezier(1.000, 0.000, 0.000, 1.000)',
};

export const colors = {
  black: '#000000',
  white: '#fff',
  lightGrey: '#FAFAFA',
  mediumGrey: '#F2F2F2',
  darkGrey: '#BEBBBB',
  mailleGold: '#AE841F',
  red: '#DB4155',
  blue: '#07AEEA',
  green: '#319865',
  orange: '#F09400',
};

export const fonts = {
  normal: 'sans-serif',
  title: 'Helvetica',
  poppins: 'Poppins',
};

export const shortMobVw = (values) => values.map((value) => mobileVw(value)).join(' ');

export const shortDskVw = (values) => values.map((value) => desktopVw(value)).join(' ');

export const letterSpacing = (space) => `${(space / 1000) * 1}em`;
