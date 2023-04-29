import React from 'react';
import {AppText} from '../../../../components';
import {ContainerGreeting} from './Greeting.styles';

interface GreetingProps {
  username: string;
}

export const Greeting = ({username}: GreetingProps) => {
  return (
    <ContainerGreeting>
      <AppText type="h3" bold>
        Bienvenido de vuelta!
      </AppText>
      <AppText>{username}</AppText>
    </ContainerGreeting>
  );
};
