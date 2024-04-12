import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';


import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/reduce/Store';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
   
    <Provider store={store}>
    <AppNavigation/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
