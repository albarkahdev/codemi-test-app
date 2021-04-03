import React, {useState} from 'react';
import {
  UIButton,
  UIColumn,
  UIContainer,
  UITextInput,
  UITypography,
} from '../../ui';

const Login = ({loading, onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => onLogin({username, password});

  return (
    <UIContainer flex={1} justify="center" align="center">
      <UIColumn bot={20}>
        <UITypography
          size={30}
          lineHeight={30}
          type="bold"
          title="Codemi Test Apps"
        />
      </UIColumn>
      <UIColumn width="100%">
        <UITextInput
          bot={10}
          placeholder="username"
          autoCapitalize="none"
          onChangeText={val => setUsername(val)}
          value={username}
          editable={!loading}
        />
        <UITextInput
          bot={16}
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={val => setPassword(val)}
          value={password}
          editable={!loading}
        />
        <UIButton
          onPress={onSubmit}
          disabled={loading || !username || !password}
          loading={loading}
          type="bold"
          title="Log in"
          width="100%"
        />
      </UIColumn>
    </UIContainer>
  );
};

export default Login;
