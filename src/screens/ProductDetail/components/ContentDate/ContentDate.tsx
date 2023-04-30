import React from 'react';
import {AppText} from '../../../../components';
import {formattedDate} from '../../../../utils';
import {ContainerDate} from './ContentDate.styles';

interface IContentDate {
  createdAt: string;
}

export const ContentDate = ({createdAt}: IContentDate) => {
  return (
    <ContainerDate>
      <AppText type="h4" bold>
        Comprado el {formattedDate(createdAt)}
      </AppText>
    </ContainerDate>
  );
};
