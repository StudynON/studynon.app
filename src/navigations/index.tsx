import React, { useEffect, useState } from 'react';
import { DevSettings } from 'react-native';
import SignedInNavigator from './SignedInNavigator';

import SignInNavigator from './SignInNavigator';

const Routes: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () =>
      DevSettings.addMenuItem('Changes Routes', () =>
        setIsLoggedIn(prevState => !prevState),
      ),
    [],
  );

  return isLoggedIn ? <SignedInNavigator /> : <SignInNavigator />;
};

export default Routes;
