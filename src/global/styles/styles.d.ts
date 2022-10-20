import 'styled-components/native';
import theme from './theme';

declare module 'styled-components' {
  export interface DefaultTheme{
    main: typeof theme;
  }
}
