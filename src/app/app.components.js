import {Linking, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {persistor, store} from 'reduxjs/store';

import AppNavigator from 'navigations/app.navigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={'rgb(64,179,79, 0.2)'}
          />
            <AppNavigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
