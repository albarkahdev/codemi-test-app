import {ActivityIndicator, View} from 'react-native';
import React, {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {setColor, setMargin} from '../global-func';

import PropTypes from 'prop-types';
import {UITypography} from '../';

const ThemedButton = props => {
  const {style, width, size, loading, title, disabled, onPress} = props;
  const height = size === 'medium' ? 52 : size === 'small' ? 36 : 45;
  const [processing, setProcessing] = useState(false);

  const onHandlePress = () => {
    if (processing) {
      return;
    }

    setProcessing(true);
    let idTimeOut = null;
    idTimeOut = setTimeout(() => {
      setProcessing(false);
    }, 500);
    return () => idTimeOut && clearTimeout(idTimeOut);

    onPress && onPress();
  };

  return (
    <TouchableOpacity
      {...props}
      onPress={onHandlePress}
      style={[
        style,
        styles.button,
        {width: width, opacity: disabled ? 0.4 : 1},
        setMargin(props),
      ]}
      activeOpacity={0.8}>
      <View style={[styles.contentButton, {height: height}]}>
        {loading ? (
          <ActivityIndicator color={setColor('primary')} />
        ) : (
          <UITypography
            title={title}
            color="white"
            type="bold"
            size={size === 'small' ? 10 : 14}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentButton: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: setColor('primary'),
  },
  button: {
    borderRadius: 4,
  },
});

ThemedButton.propTypes = {
  title: PropTypes.string.isRequired,
  top: PropTypes.number,
  bot: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default memo(ThemedButton);
