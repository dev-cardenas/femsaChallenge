import React, {ReactNode} from 'react';

import {Container} from './Layout.styles';

interface ILayout {
  children: ReactNode;
}

export const Layout = ({children}: ILayout) => {
  return <Container>{children}</Container>;
};
