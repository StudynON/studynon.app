import { NativeStackNavigationProp } from '@react-navigation/native-stack';

declare global {
  export type StudentAreaStackParamsList = {
    studentArea: undefined;
    createMaterials: undefined;
    studyMaterials: undefined;
    createGoals: undefined;
    goalsSchedule: undefined;
  };

  export type StudentAreaStackNavigatorProps = NativeStackNavigationProp<
    StudentAreaStackParamsList,
    'studentArea'
  >;
}
