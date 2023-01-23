import nextJest from "next/jest";
import type { Config } from "jest";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig: Config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    "^@components$": "<rootDir>/src/components/index.ts",
    "^@containers$": "<rootDir>/src/containers/index.ts",
    "^@contexts$": "<rootDir>/src/contexts/index.ts",
    "^@hooks$": "<rootDir>/src/hooks/index.ts",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@services$": "<rootDir>/src/services/index.ts",
    "^@types$": "<rootDir>/src/types/index.ts",
    "^@utils$": "<rootDir>/src/utils/index.ts",
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "\\.[jt]sx?$": "ts-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$"],
};

export default createJestConfig(customJestConfig);
