import { ActionButtonContainer, Container } from './styles';
import ActionButtons from './components/ActionButtons';
import Typography from '../../components/Typography';
import { NameIconsTypes } from '../../constants/icons';

interface ButtonsProps {
  title: string;
  iconName: NameIconsTypes;
  to: string;
}

const buttons: ButtonsProps[] = [
  {
    title: 'Adicionar material',
    iconName: 'plusHome',
    to: '',
  },
  {
    title: 'Acessar material',
    iconName: 'listHome',
    to: '',
  },
  {
    title: 'Definir metas',
    iconName: 'goalHome',
    to: '',
  },
  {
    title: 'Ver todas as metas',
    iconName: 'calendarHome',
    to: '',
  },
];

export default function StudentArea() {
  return (
    <Container>
      <Typography fontStyle="h1Bold" color="text">
        O que você deseja fazer?
      </Typography>

      <ActionButtonContainer>
        {buttons.map((button, index) => (
          <ActionButtons
            key={index}
            title={button.title}
            iconName={button.iconName}
          />
        ))}
      </ActionButtonContainer>
    </Container>
  );
}
