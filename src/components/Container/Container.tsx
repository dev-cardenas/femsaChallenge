import React, {ReactNode} from 'react';

import {Layout} from './Container.styles';

interface IContainer {
  children: ReactNode;
}

export const Container = ({children}: IContainer) => {
  return <Layout>{children}</Layout>;
};
