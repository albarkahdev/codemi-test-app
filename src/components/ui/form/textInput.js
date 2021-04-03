import React, {memo} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {setColor, setMargin} from '../global-func';

import PropTypes from 'prop-types';
import {UITypography} from '../';

const ThemedTextInput = props => {
  const {style, error, editable = true, label, touched} = props;

  return (
    <View style={[style, styles.wrapperTextInput, setMargin(props)]}>
      {label ? <UITypography style={styles.label}>{label}</UITypography> : null}
      <TextInput
        {...props}
        placeholderTextColor={setColor('black-BBB')}
        style={[
          styles.textInput,
          styles.textInputText,
          !editable && {...styles.disabled, ...styles.textDisabled},
        ]}
      />

      {error && touched && <UITypography title={error} color="red" size={12} />}
    </View>
  );
};

ThemedTextInput.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapperTextInput: {
    width: '100%',
  },
  textInput: {
    backgroundColor: setColor('white'),
    width: '100%',
    borderColor: setColor('black-DDD'),
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  textInputText: {
    fontSize: 14,
    color: setColor(),
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    color: setColor('black-666'),
    marginBottom: 1,
  },
  disabled: {
    backgroundColor: setColor('black-EEE'),
  },
  textDisabled: {
    color: setColor('black-666'),
  },
});

export default memo(ThemedTextInput);
