import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import DrawerNavigator from './routes/HomeDrawerNavigator';
import { theme } from './constants/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
