/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {MeasuredView} from './MeasuredView.tsx';

function App(): React.JSX.Element {
  return (
    <SafeAreaView
      style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <MeasuredView label="Alpha" />
    </SafeAreaView>
  );
}
export default App;
