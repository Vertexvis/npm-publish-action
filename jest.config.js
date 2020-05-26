// TODO (jeff): Remove this configuration in favor of @vertexvis/jest-config-vertexvis when available

module.exports = {
  preset: "ts-jest",
  collectCoverageFrom: ["**/src/**", "!**/src/__*__/**"],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 40,
      lines: 40,
      statements: 35,
    },
  },
  testPathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/build/",
    "<rootDir>/node_modules/"
  ]
};
