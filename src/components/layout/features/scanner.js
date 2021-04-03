import {ActivityIndicator, StyleSheet, View} from 'react-native';

import ModalQR from './modalQR';
import PropTypes from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';
import React from 'react';

const Scanner = props => {
  const {style, data, loading, showModal, onClose} = props;
  return (
    <View style={[style, styles.container]}>
      <ModalQR data={data} visible={showModal} onClose={onClose} />
      {!showModal && (
        <QRCodeScanner
          {...props}
          reactivate={true}
          showMarker={true}
          reactivateTimeout={3000}
          customMarker={
            <View>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <View style={styles.qrStyle}>
                  <View style={[styles.row, styles.flex]}>
                    <View style={styles.flex}>
                      <View style={styles.qrStyleTopLeft} />
                    </View>
                    <View style={styles.flex}>
                      <View style={styles.qrStyleTopRight} />
                    </View>
                  </View>
                  <View style={styles.row}>
                    <View style={styles.flex}>
                      <View style={styles.qrStyleBotLeft} />
                    </View>
                    <View style={styles.flex}>
                      <View style={styles.qrStyleBotRight} />
                    </View>
                  </View>
                </View>
              )}
            </View>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  qrStyle: {
    width: 250,
    height: 250,
  },
  qrStyleTopLeft: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
    borderLeftWidth: 2,
    borderTopWidth: 2,
    borderColor: '#22FF7A',
  },
  qrStyleTopRight: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderColor: '#22FF7A',
  },
  qrStyleBotLeft: {
    width: 40,
    height: 40,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    borderColor: '#22FF7A',
  },
  qrStyleBotRight: {
    width: 40,
    height: 40,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    borderColor: '#22FF7A',
  },
});

Scanner.propTypes = {
  data: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  style: PropTypes.object,
};

export default Scanner;
