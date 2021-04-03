import React, {memo, useState} from 'react';

import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {setMargin} from '../global-func';

const ThemedTouchable = (props) => {
  const {children, onPress, style} = props;
  const [disabled, setDisabled] = useState(false);

  const onHandlePress = () => {
    if (disabled) return;

    setDisabled(true);
    let idTimeOut = null;
    idTimeOut = setTimeout(() => {
      setDisabled(false);
    }, 500);
    return () => idTimeOut && clearTimeout(idTimeOut);
  
    onPress && onPress();
  };

  return (
    <TouchableOpacity
      {...props}
      onPress={onHandlePress}
      style={[style, setMargin(props)]}
      activeOpacity={0.8}>
      {children}
    </TouchableOpacity>
  );
};

ThemedTouchable.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.number,
  bot: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

export default memo(ThemedTouchable);
