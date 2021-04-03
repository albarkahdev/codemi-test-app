import {UIButtonIcon, UIColumn, UIContainer} from '../../ui';

import {AssetIconsPack} from '../../../app/app-icons-pack';
import PropTypes from 'prop-types';
import QR from './QR';
import React from 'react';
import {setColor} from '../../ui/global-func';

const Home = ({username, gotoScanQR, onLogout}) => {
  return (
    <UIContainer flex={1} style={{backgroundColor: setColor('primary-200')}}>
      <UIButtonIcon
        icon={AssetIconsPack.exit}
        title="Log Out"
        onPress={onLogout}
      />
      <UIColumn flex={1} width="100%" justify="center" align="center">
        <QR username={username} />
      </UIColumn>
      <UIButtonIcon
        icon={AssetIconsPack.camera}
        title="Scan QR code"
        onPress={gotoScanQR}
      />
    </UIContainer>
  );
};

Home.propTypes = {
  username: PropTypes.string.isRequired,
  gotoScanQR: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Home;
