import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import Stack from './src/navigations/Stack';
import store from './src/redux/store';

const App: React.FC = () => {
  if (__DEV__) {
    import('./ReactoTron').then(() => console.log('Reactotron Configurado'));
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
