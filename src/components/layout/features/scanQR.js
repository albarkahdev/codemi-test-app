import {UIButtonIcon, UIContainer} from '../../ui';

import {AssetIconsPack} from '../../../app/app-icons-pack';
import React from 'react';
import Scanner from './scanner';

const ScanQR = ({backToHome}) => {
  return (
    <UIContainer noPaddingHorizontal flex={1}>
      <Scanner />
      <UIButtonIcon
        title="Back to your QR code"
        icon={AssetIconsPack.qr}
        onPress={backToHome}
      />
    </UIContainer>
  );
};

export default ScanQR;
