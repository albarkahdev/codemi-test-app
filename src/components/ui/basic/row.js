import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {setAlign, setJustify, setMargin} from '../global-func';

import PropTypes from 'prop-types';

const ThemedRow = props => {
  const {children, align, justify, flex, style} = props;

  return (
    <View
      {...props}
      style={[
        style,
        styles.row,
        setMargin(props),
        {
          alignItems: setAlign(align),
          justifyContent: setJustify(justify),
          flex,
        },
      ]}>
      {children}
    </View>
  );
};

ThemedRow.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['center', 'flex-end']),
  justify: PropTypes.oneOf(['center', 'flex-end']),
  flex: PropTypes.number,
  top: PropTypes.number,
  bot: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default memo(ThemedRow);
