import {UIButtonIcon, UIColumn, UIContainer} from '../../ui';

import {AssetIconsPack} from '../../../app/app-icons-pack';
import QR from './QR';
import React from 'react';
import {setColor} from '../../ui/global-func';

const Home = () => {
  return (
    <UIContainer flex={1} style={{backgroundColor: setColor('primary-200')}}>
      <UIButtonIcon icon={AssetIconsPack.exit} title="Log Out" />
      <UIColumn flex={1} width="100%" justify="center" align="center">
        <QR />
      </UIColumn>
      <UIButtonIcon icon={AssetIconsPack.camera} title="Scan QR code" />
    </UIContainer>
  );
};

export default Home;
