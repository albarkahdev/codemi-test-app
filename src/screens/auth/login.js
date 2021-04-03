import LoginContent from '../../components/layout/auth/login';
import React from 'react';
import {connect} from 'react-redux';
import {requestLogin} from '../../reduxjs/actions/auth';

const Login = ({loading, token, reqLogin}) => {
  return <LoginContent loading={loading} onLogin={reqLogin} />;
};

const mapStateToProps = state => ({
  loading: state.user.loading,
  token: state.user.token,
});

function mapDispatchToProps(dispatch) {
  return {
    reqLogin: ({username, password}) =>
      dispatch(requestLogin({username, password})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
