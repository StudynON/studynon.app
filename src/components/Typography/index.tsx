import type { ITypography } from './types';

import { TextContainer } from './styles';

const Typography = ({
  children,
  fontStyle = 'h1Medium',
  color = 'text',
  ...rest
}: ITypography) => {
  return (
    <TextContainer color={color} fontStyle={fontStyle} {...rest}>
      {children}
    </TextContainer>
  );
};

export default Typography;
