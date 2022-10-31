import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';
import DrawerNavigator from '../routes/HomeDrawerNavigator';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
