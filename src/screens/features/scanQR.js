import React from 'react';
import ScanQRContent from '../../components/layout/features/scanQR';

const ScanQR = ({navigation}) => {
  const backToHome = () => navigation.pop();

  return <ScanQRContent backToHome={backToHome} />;
};

export default ScanQR;
