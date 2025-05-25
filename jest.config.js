export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json'
    }
  },
  moduleNameMapper: {
    '^@/utils/getBaseURL$': '<rootDir>/src/utils/getBaseURL.node.ts'
  }
};