import React from 'react';
import {AppText} from '../../../../components';
import {ContentHeader, ContentName} from './Header.styles';

interface IHeader {
  name: string;
}

export const Header = ({name}: IHeader) => {
  return (
    <ContentHeader>
      <ContentName>
        <AppText type="h3" bold>
          {name}
        </AppText>
      </ContentName>
    </ContentHeader>
  );
};
