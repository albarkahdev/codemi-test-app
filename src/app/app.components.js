import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {persistor, store} from '../reduxjs/store';

import AppNavigator from '../navigations/app.navigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import React from 'react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={styles.wrapper}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor={'rgba(64, 179, 79, 0.2)'}
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
