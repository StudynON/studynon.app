import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type SignInStackParamsList = {
    studentArea: undefined;
    createMaterials: undefined;
    studyMaterials: undefined;
    createGoals: undefined;
    goalsSchedule: undefined;
  };

  export type SignInStackNavigatorProps = NativeStackNavigationProp<
    SignInStackParamsList,
    'studentArea'
  >;
}
