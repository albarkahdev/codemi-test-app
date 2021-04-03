import {Alert} from 'react-native';
import HomeContent from '../../components/layout/home';
import React from 'react';
import {connect} from 'react-redux';
import {requestLogout} from '../../reduxjs/actions/auth';

const Home = ({navigation, username, reqLogout}) => {
  const gotoScanQR = () => navigation.navigate('ScanQR');
  const onLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to logout?', [
      {
        text: 'No',
      },
      {
        text: 'Yes',
        onPress: reqLogout,
      },
    ]);
  };

  return (
    <HomeContent
      username={username}
      gotoScanQR={gotoScanQR}
      onLogout={onLogout}
    />
  );
};

const mapStateToProps = state => ({
  username: state.user.data.username,
});

function mapDispatchToProps(dispatch) {
  return {
    reqLogout: () => dispatch(requestLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
