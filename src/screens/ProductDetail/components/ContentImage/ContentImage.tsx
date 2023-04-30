import React from 'react';
import {AppSvg} from '../../../../components';
import {Container, Image} from './ContentImage.styles';

interface IContentImage {
  image: string;
}

export const ContentImage = ({image}: IContentImage) => {
  return (
    <Container>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
        />
      ) : (
        <AppSvg name={'ProductEmpty'} width={200} height={200} />
      )}
    </Container>
  );
};
