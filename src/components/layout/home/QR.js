import {Image, StyleSheet} from 'react-native';
import {UIColumn, UITypography} from '../../ui';

import React from 'react';
import {URL_GOOGLE_AP_QR_CODE} from '../../../constants/api';
import {setColor} from '../../ui/global-func';
import {width} from '../../../constants/dimensions';

const QR = ({username}) => {
  return (
    <UIColumn style={styles.container} justify="center" align="center">
      <Image
        source={{uri: URL_GOOGLE_AP_QR_CODE + username}}
        style={styles.qrCode}
      />
      <UITypography
        title={username}
        size={30}
        lineHeight={30}
        type="bold"
        top={15}
      />
    </UIColumn>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: setColor('white'),
    elevation: 3,
    width: width - 60,
    height: width - 60,
  },
  qrCode: {
    width: width - 150,
    height: width - 150,
  },
});

export default QR;
