import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

const Stack = createNativeStackNavigator<SignInStackParamsList>();

const FakeScreen = () => <View />;

const SignInNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="onBoarding">
      <Stack.Screen name="onBoarding" component={FakeScreen} />
      <Stack.Screen name="access" component={FakeScreen} />
      <Stack.Screen name="login" component={FakeScreen} />
      <Stack.Screen name="signUp" component={FakeScreen} />
    </Stack.Navigator>
  );
};

export default SignInNavigator;
