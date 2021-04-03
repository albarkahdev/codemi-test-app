import {Modal, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import {UIColumn, UIContainer, UITouchable, UITypography} from '../../ui';

import PropTypes from 'prop-types';
import QR from '../home/QR';
import {height} from '../../../constants/dimensions';
import {setColor} from '../../ui/global-func';

const ModalQR = ({visible, data, onClose}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <UIContainer
        noPaddingHorizontal
        justify="center"
        align="center"
        style={styles.container}>
        <QR username={data} />
        <UITouchable onPress={onClose}>
          <UIColumn top={15}>
            <UITypography
              title="close"
              type="bold"
              size={30}
              lineHeight={30}
              bot={10}
              color="white"
            />
          </UIColumn>
        </UITouchable>
      </UIContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: setColor('black-400'),
    flex: 1,
    height: height,
  },
});

ModalQR.propTypes = {
  visible: PropTypes.bool.isRequired,
  data: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default memo(ModalQR);
