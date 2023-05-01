// import React from 'react';
import 'react-native-gesture-handler/jestSetup';

// jest.mock(
//   'react-native-safe-area-context',
//   () => require('react-native-safe-area-context/jest/mock').default,
// );

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('../../assets/svg/product_empty.svg', () => 'mocked-image-1.svg');

const mockNavigation = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

export const mockUseNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

export const mockLinkTo = jest.fn();

export const mockReactNavigation = {
  useNavigation: () => mockUseNavigation,
};

jest.mock('@react-navigation/native-stack', () => {
  return mockReactNavigation;
});

export const mockShare = jest.fn();
