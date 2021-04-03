import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {setAlign, setJustify, setMargin} from '../global-func';

import PropTypes from 'prop-types';

const ThemedColumn = props => {
  const {children, flex, align, justify, style} = props;

  return (
    <View
      {...props}
      style={[
        style,
        styles.column,
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

ThemedColumn.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['center', 'flex-end']),
  justify: PropTypes.oneOf(['center', 'flex-end']),
  flex: PropTypes.number,
  top: PropTypes.number,
  bot: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
});

export default memo(ThemedColumn);
