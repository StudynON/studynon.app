import 'styled-components/native';

declare module 'styled-components' {
  export interface ColorType {
    main: string;
  }

  export type ColorsType =
    | 'background'
    | 'text'
    | 'caption'
    | 'section'
    | 'white'
    | 'active'
    | 'inactive'
    | 'error';

  export interface PaletteType {
    background: ColorType;
    text: ColorType;
    caption: ColorType;
    section: ColorType;
    white: ColorType;
    active: ColorType;
    inactive: ColorType;
    error: ColorType;
  }

  export interface TypographyProps {
    fontFamily: string;
    fontSize: number;
  }

  export interface Typography {
    h1Bold: TypographyProps;
    h1Medium: TypographyProps;
    h1Regular: TypographyProps;
    h2Bold: TypographyProps;
    h2Medium: TypographyProps;
    h2Regular: TypographyProps;
    h3Bold: TypographyProps;
    h3Medium: TypographyProps;
    h3Regular: TypographyProps;
    caption: TypographyProps;
    italic: TypographyProps;
  }

  export type TypographyType =
    | 'h1Bold'
    | 'h1Medium'
    | 'h1Regular'
    | 'h2Bold'
    | 'h2Medium'
    | 'h2Regular'
    | 'h3Bold'
    | 'h3Medium'
    | 'h3Regular'
    | 'caption'
    | 'italic';

  export interface DefaultTheme {
    colors: PaletteType;
    fonts: Typography;
  }
}
