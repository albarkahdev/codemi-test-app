import React, {useState} from 'react';
import {UIButtonIcon, UIContainer} from '../../ui';

import {AssetIconsPack} from '../../../app/app-icons-pack';
import Scanner from './scanner';

const ScanQR = ({backToHome}) => {
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState('');
  const onSuccess = e => {
    setModal(true);
    setData(e?.data);
  };
  const onClose = () => setModal(false);

  return (
    <UIContainer noPaddingHorizontal flex={1}>
      <Scanner
        onRead={onSuccess}
        showModal={showModal}
        onClose={onClose}
        data={data}
      />
      <UIButtonIcon
        title="Back to your QR code"
        icon={AssetIconsPack.qr}
        onPress={backToHome}
      />
    </UIContainer>
  );
};

export default ScanQR;
