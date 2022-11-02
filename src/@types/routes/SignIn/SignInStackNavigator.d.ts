import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamsList = {
    onBoarding: undefined;
    access: undefined;
    login: undefined;
    signUp: undefined;
  };

  export type SignInStackNavigatorProps = NativeStackNavigationProp<
    SignInStackParamsList,
    'onBoarding'
  >;
}
