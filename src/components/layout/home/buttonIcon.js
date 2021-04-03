import {Image, StyleSheet} from 'react-native';
import {UIRow, UITouchable, UITypography} from '../../ui';

import React from 'react';

const ButtonIcon = ({icon, title}) => {
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

export default ButtonIcon;
