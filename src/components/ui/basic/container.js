import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {setAlign, setJustify, setMargin} from '../global-func';

import PropTypes from 'prop-types';

const ThemedContainer = props => {
  const {children, noPaddingHorizontal, align, justify, flex, style} = props;
  return (
    <View
      {...props}
      style={[
        style,
        !noPaddingHorizontal && styles.container,
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

ThemedContainer.propTypes = {
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
  container: {
    paddingHorizontal: 15,
  },
});

export default memo(ThemedContainer);
