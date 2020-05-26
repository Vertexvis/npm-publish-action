// TODO (jeff): Remove this configuration in favor of @vertexvis/jest-config-vertexvis when available

module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["**/src/**", "!**/src/__*__/**"],
  coverageThreshold: {
    global: {
      branches: 5,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/build/",
    "<rootDir>/node_modules/"
  ]
};
