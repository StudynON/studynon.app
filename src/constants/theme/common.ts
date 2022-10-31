import type { PaletteType, Typography } from 'styled-components';
import * as Colors from '../colors';
import { Fonts } from '../fonts';

export const typographyCommon: Typography = {
  h1Bold: {
    fontFamily: Fonts.robotoBold,
    fontSize: 16,
  },
  h1Medium: {
    fontFamily: Fonts.robotoMedium,
    fontSize: 16,
  },
  h1Regular: {
    fontFamily: Fonts.robotoRegular,
    fontSize: 16,
  },
  h2Bold: {
    fontFamily: Fonts.robotoBold,
    fontSize: 14,
  },
  h2Medium: {
    fontFamily: Fonts.robotoMedium,
    fontSize: 14,
  },
  h2Regular: {
    fontFamily: Fonts.robotoRegular,
    fontSize: 14,
  },
  h3Bold: {
    fontFamily: Fonts.robotoBold,
    fontSize: 12,
  },
  h3Medium: {
    fontFamily: Fonts.robotoMedium,
    fontSize: 12,
  },
  h3Regular: {
    fontFamily: Fonts.robotoRegular,
    fontSize: 12,
  },
  caption: {
    fontFamily: Fonts.robotoBold,
    fontSize: 10,
  },
  italic: {
    fontFamily: Fonts.robotoItalic,
    fontSize: 12,
  },
};

export const colors: PaletteType = {
  background: {
    main: Colors.background,
  },
  text: {
    main: Colors.text,
  },
  caption: {
    main: Colors.caption,
  },
  section: {
    main: Colors.section,
  },
  white: {
    main: Colors.white,
  },
  active: {
    main: Colors.active,
  },
  inactive: {
    main: Colors.inactive,
  },
  error: {
    main: Colors.error,
  },
};
