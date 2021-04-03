import React, {memo} from 'react';
import {setColor, setFontWeight, setMargin} from '../global-func';

import PropTypes from 'prop-types';
import {Text} from 'react-native';

const FONT_BASE = 14;

const ThemedTypography = (props) => {
  const {
    title,
    size,
    children,
    textAlign,
    lineHeight,
    textDecorationLine,
    type,
    color,
    style,
  } = props;
  return (
    <Text
      {...props}
      style={[
        style,
        {
          fontSize: size,
          fontWeight: setFontWeight(type),
          color: setColor(color),
          textAlign,
          textDecorationLine,
          lineHeight,
        },
        setMargin(props),
      ]}>
      {title || children}
    </Text>
  );
};

ThemedTypography.defaultProps = {
  size: FONT_BASE,
  textAlign: 'left',
  textDecorationLine: 'none',
  lineHeight: 20,
};

ThemedTypography.propTypes = {
  title: PropTypes.any,
  lineHeight: PropTypes.number,
  size: PropTypes.number,
  children: PropTypes.node,
  textAlign: PropTypes.string,
  textDecorationLine: PropTypes.string,
  type: PropTypes.oneOf([
    'bold',
    'semi-bold',
    'normal',
  ]),
  color: PropTypes.oneOf([
    'white',
    'primary',
    'grey',
    'black-333',
    'black-666',
    'red',
    'success',
  ]),
  top: PropTypes.number,
  bot: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

export default memo(ThemedTypography);
