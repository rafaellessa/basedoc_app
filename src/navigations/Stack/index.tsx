import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FunctionComponent} from 'react';
import Signin from '../../screens/Signin';
import Splash from '../../screens/Splash';
import File from '../../screens/Files';

interface RootRouteScreens {
  name: string;
  component: FunctionComponent<any>;
}

export const navigations: RootRouteScreens[] = [
  {
    name: 'Splash',
    component: Splash,
  },
  {
    name: 'Signin',
    component: Signin,
  },
  {
    name: 'Files',
    component: File,
  },
];

const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  const renderNavigations = navigations.map(({name, component: Component}) => {
    return (
      <Stack.Screen key={name} name={name}>
        {(props: any) => <Component key={name} {...props} />}
      </Stack.Screen>
    );
  });

  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      {renderNavigations}
    </Stack.Navigator>
  );
};

export default Navigation;
