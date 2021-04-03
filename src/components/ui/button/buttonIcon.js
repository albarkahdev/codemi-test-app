import {Image, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {UIRow, UITouchable, UITypography} from '../';

import PropTypes from 'prop-types';

const ThemedButtonIcon = ({icon, title}) => {
  return (
    <UITouchable>
      <UIRow width="100%" justify="center" align="center">
        <Image source={icon} style={styles.icon} />
        <UITypography title={title} left={5} bot={16} top={16} />
      </UIRow>
    </UITouchable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

ThemedButtonIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
};

export default memo(ThemedButtonIcon);
