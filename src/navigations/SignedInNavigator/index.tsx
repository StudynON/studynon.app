import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import { View } from 'react-native';
import Icon from '../../components/Icons';
import { WrapperIconMenu } from './styles';

const Drawer = createDrawerNavigator<DrawerParamList>();

const FakeScreen = () => <View />;

interface IButtonNavigation {
  navigation: DrawerNavigationProp<DrawerParamList>;
}

const Container = ({ navigation }: IButtonNavigation) => {
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
        headerRight: () => <Container navigation={navigation} />,
        headerLeft: () => false,
      })}
    >
      <Drawer.Screen name="studentArea" component={FakeScreen} />
      <Drawer.Screen name="configuration" component={FakeScreen} />
      <Drawer.Screen name="goalsSchedule" component={FakeScreen} />
      <Drawer.Screen name="profile" component={FakeScreen} />
      <Drawer.Screen name="studyMaterials" component={FakeScreen} />
    </Drawer.Navigator>
  );
};

export default SignedInNavigator;
