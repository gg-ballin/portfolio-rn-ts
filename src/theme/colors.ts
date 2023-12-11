const light = {
  primary: '#2c3e50',
  secondary: '#95a5a6',
  background: '#ecf0f1',
  text: '#000',
  white: '#fff',
  black: '#000',
};

const dark = {
  primary: '#2c3e50',
  secondary: '#95a5a6',
  background: '#2c3e50',
  text: '#fff',
  white: '#fff',
  black: '#000',
};

const colors = {
  light,
  dark,
};

const themeStyle: ThemeColors = {
  light,
  dark,
};

type ThemeColors = typeof colors;

export default themeStyle;
