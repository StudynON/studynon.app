import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp
} from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator<DrawerParamList>();

const FakeScreen = () => <View />;

interface IButtonNavigation {
  navigation: DrawerNavigationProp<DrawerParamList>
}

const Container = ({navigation}: IButtonNavigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Text>Menu</Text>
    </TouchableOpacity>
  );
};

const SignedInNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="studentArea"
      screenOptions={({navigation}) => ({
        drawerPosition: 'right',
        drawerType: 'back',
        headerRight: () => <Container navigation={navigation} />,
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
