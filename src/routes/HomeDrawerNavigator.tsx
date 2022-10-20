import { createDrawerNavigator } from '@react-navigation/drawer';
import AddMaterial from '../screens/AddMaterial';
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
      <Drawer.Screen
        name="Materials"
        component={AddMaterial}
        options={{
          title: 'Adicionar material',
          headerTitle: 'Owlrange Notes',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
