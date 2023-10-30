const Colors = {
  primary: '#4285F4',
  secondary: '#34A853',
  background: '#F9F9F9',
  text: '#333333',
  accent: '#EA4335',
} as const;

export type Theme = typeof Colors;
export default Colors;
