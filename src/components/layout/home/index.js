import {UIColumn, UIContainer} from '../../ui';

import {AssetIconsPack} from '../../../app/app-icons-pack';
import ButtonIcon from './buttonIcon';
import QR from './QR';
import React from 'react';
import {setColor} from '../../ui/global-func';

const Home = () => {
  return (
    <UIContainer flex={1} style={{backgroundColor: setColor('primary-200')}}>
      <ButtonIcon icon={AssetIconsPack.exit} title="Log Out" />
      <UIColumn flex={1} width="100%" justify="center" align="center">
        <QR />
      </UIColumn>
      <ButtonIcon icon={AssetIconsPack.camera} title="Scan QR Code" />
    </UIContainer>
  );
};

export default Home;
