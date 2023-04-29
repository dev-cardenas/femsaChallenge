import React from 'react';
import {StatusBar} from 'react-native';

import {RootNavigator} from './src/navigators';
import {Container} from './src/components';

// import {SafeAreaView} from './src/components/SafeAreaView';
import {AppColors} from './src/utils/index';

function App(): JSX.Element {
  return (
    <Container>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.black} />
      <RootNavigator />
    </Container>
  );
}

export default App;
