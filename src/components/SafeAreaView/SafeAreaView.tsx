import React, {ReactNode} from 'react';
import {SafeArea} from './SafeAreaView.styles';

interface ISafeArea {
  children: ReactNode;
}

export const SafeAreaView = ({children}: ISafeArea) => {
  return <SafeArea>{children}</SafeArea>;
};
