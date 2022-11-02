import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

const Stack = createNativeStackNavigator<StudentAreaStackParamsList>();

const FakeScreen = () => <View />;

const SignInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="studentArea">
      <Stack.Screen name="studentArea" component={FakeScreen} />
      <Stack.Screen name="createGoals" component={FakeScreen} />
      <Stack.Screen name="createMaterials" component={FakeScreen} />
      <Stack.Screen name="goalsSchedule" component={FakeScreen} />
      <Stack.Screen name="studyMaterials" component={FakeScreen} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
