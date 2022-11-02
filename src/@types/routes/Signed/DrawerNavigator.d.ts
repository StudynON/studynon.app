import { DrawerNavigationProp } from '@react-navigation/drawer';

declare global {
  export type DrawerParamList = {
    studentArea: undefined;
    goalsSchedule: undefined;
    studyMaterials: undefined;
    configuration: undefined;
    profile: undefined;
  };

  export type StartDrawerNavigationProp = DrawerNavigationProp<
    DrawerParamList,
    'studentArea'
  >;
}
