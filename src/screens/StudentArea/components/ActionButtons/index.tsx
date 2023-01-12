import { useCallback, useState } from 'react';
import Icon from '../../../../components/Icons';
import Typography from '../../../../components/Typography';
import { NameIconsTypes } from '../../../../constants/icons';
import { Box, Wrapper } from './styles';

import * as Colors from '../../../../constants/colors';

interface IActionButtonProps {
  title: string;
  iconName: NameIconsTypes;
}

export default function ActionButtons({ title, iconName }: IActionButtonProps) {
  const [pressed, setPressed] = useState(false);

  const onPressInButton = useCallback(() => {
    setPressed(true);
  }, []);
  const onPressOutButton = useCallback(() => {
    setPressed(false);
  }, []);

  return (
    <Box onPressIn={onPressInButton} onPressOut={onPressOutButton}>
      <Wrapper>
        <Icon
          size={25}
          icon={iconName}
          activeColor={pressed ? Colors.active : Colors.inactive}
        />
      </Wrapper>
      <Wrapper>
        <Typography
          color={pressed ? 'active' : 'inactive'}
          fontStyle="h3Regular"
          style={{ textAlign: 'center' }}
        >
          {title.toUpperCase()}
        </Typography>
      </Wrapper>
    </Box>
  );
}
