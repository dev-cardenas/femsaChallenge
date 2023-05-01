import {defaults as tsjPreset} from 'ts-jest/presets';
import type {JestConfigWithTsJest} from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
  ...tsjPreset,
  preset: 'react-native',
  bail: 1,
  verbose: true,
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileTransformer.js',
    '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!react-native|react-navigation)/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svg'],
  setupFiles: ['<rootDir>/jest/setupTest.tsx'],
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/__mocks__/svgMock.js',
    '^axios$': '<rootDir>/__mocks__/axios.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
};

export default jestConfig;
