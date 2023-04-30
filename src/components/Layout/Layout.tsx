import React, {ReactNode} from 'react';

import {Container} from './Layout.styles';

interface ILayout {
  children: ReactNode;
  paddingHorizontal?: boolean;
  paddingTop?: boolean;
  paddingBottom?: boolean;
}

export const Layout = ({
  children,
  paddingHorizontal = true,
  paddingTop = true,
  paddingBottom = true,
}: ILayout) => {
  return (
    <Container
      paddingTop={paddingTop}
      paddingHorizontal={paddingHorizontal}
      paddingBottom={paddingBottom}>
      {children}
    </Container>
  );
};
