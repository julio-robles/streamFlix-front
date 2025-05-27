export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json'
    }
  },
  moduleNameMapper: {
    '^@/utils/getBaseURL$': '<rootDir>/src/utils/getBaseURL.node.ts'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  testMatch: ['**/tests/**/*.test.(ts|tsx|js|jsx)']
};
