import Icon from '../../../../components/Icons';
import Typography from '../../../../components/Typography';
import { NameIconsTypes } from '../../../../constants/icons';
import { Box, Wrapper } from './styles';

interface IActionButtonProps {
  title: string;
  iconName: NameIconsTypes;
}

export default function ActionButtons({ title, iconName }: IActionButtonProps) {
  return (
    <Box>
      <Wrapper>
        <Icon size={25} icon={iconName} />
      </Wrapper>
      <Wrapper>
        <Typography
          color="inactive"
          fontStyle="h3Regular"
          style={{ textAlign: 'center' }}
        >
          {title.toUpperCase()}
        </Typography>
      </Wrapper>
    </Box>
  );
}
