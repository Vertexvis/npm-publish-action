// TODO (jeff): Remove this configuration in favor of @vertexvis/jest-config-vertexvis when available

module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["**/src/**", "!**/src/__*__/**"],
  coverageThreshold: {
    global: {
      branches: 65,
      functions: 90,
      lines: 80,
      statements: 80,
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
  ],
};
