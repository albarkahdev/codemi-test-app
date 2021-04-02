import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {LogBox, YellowBox} from 'react-native';
import React, {useEffect, useState} from 'react';

import {AuthNavigator} from './auth.navigator';
import HomeNavigator from './home.navigator';
import {connect} from 'react-redux';

// LogBox.ignoreAllLogs();
// YellowBox.ignoreWarnings([
//   'Non-serializable values were found in the navigation state',
// ]);

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'white',
  },
};

function AppNavigator({user, requestLogout}) {
  const [token, setToken] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setToken(user.token);
    setLoading(false);
  }, [user.token]);

  if (isLoading) {
    return null; // change spinner ?
  }

  return (
    <NavigationContainer theme={navigatorTheme}>
      {!token ? <AuthNavigator /> : <HomeNavigator />}
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    // requestLogout: () => dispatch(requestLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
