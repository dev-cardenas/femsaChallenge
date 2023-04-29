import React from 'react';
import {StatusBar} from 'react-native';

import {RootNavigator} from './src/navigators/index';
import {SafeAreaView} from './src/components/SafeAreaView';
import {AppColors} from './src/utils/index';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} backgroundColor={AppColors.black} />
      <RootNavigator />
    </SafeAreaView>
  );
}

export default App;
