import {
  UIButton,
  UIColumn,
  UIContainer,
  UITextInput,
  UITypography,
} from '../../ui';

import React from 'react';

const Login = () => {
  return (
    <UIContainer flex={1} justify="center" align="center">
      <UIColumn bot={14}>
        <UITypography size={20} type="bold">
          Codemi Test Apps
        </UITypography>
      </UIColumn>
      <UIColumn width="100%">
        <UITextInput
          bot={10}
          placeholder="email"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <UITextInput
          bot={16}
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry
        />
        <UIButton
          onPress={() => null}
          type="bold"
          title="Log in"
          width="100%"
        />
      </UIColumn>
    </UIContainer>
  );
};

export default Login;
