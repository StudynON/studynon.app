import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeDrawer"
        component={Home}
        options={{
          title: 'Home',
          headerTitle: 'Owlrange Notes',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
