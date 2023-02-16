import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import Icon from '../../components/Icons';
import { WrapperIconMenu, WrapperLogo } from './styles';
import Logo from '../../components/Logo';
import StudentArea from '../../screens/StudentArea';

const Drawer = createDrawerNavigator<DrawerParamList>();

const FakeScreen = () => <View />;

interface IButtonNavigation {
  navigation: DrawerNavigationProp<DrawerParamList>;
}

const DrawerMenu = ({ navigation }: IButtonNavigation) => {
  return (
    <WrapperIconMenu onPress={() => navigation.openDrawer()}>
      <Icon icon="iconMenu" size={24} />
    </WrapperIconMenu>
  );
};

const SignedInNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="studentArea"
      screenOptions={({ navigation }) => ({
        drawerPosition: 'right',
        drawerType: 'back',
        headerRight: () => <DrawerMenu navigation={navigation} />,
        headerLeft: () => (
          <WrapperLogo>
            <Logo />
          </WrapperLogo>
        ),
        headerTitle: '',
      })}
    >
      <Drawer.Screen
        name="studentArea"
        component={StudentArea}
        options={{ title: 'Area do Estudante' }}
      />
      <Drawer.Screen
        name="profile"
        component={FakeScreen}
        options={{ title: 'Perfil' }}
      />
      <Drawer.Screen
        name="goalsSchedule"
        component={FakeScreen}
        options={{ title: 'Cronograma de Metas' }}
      />
      <Drawer.Screen
        name="studyMaterials"
        component={FakeScreen}
        options={{ title: 'Material de Estudo' }}
      />
      <Drawer.Screen
        name="configuration"
        component={FakeScreen}
        options={{ title: 'Configurações' }}
      />
    </Drawer.Navigator>
  );
};

export default SignedInNavigator;
