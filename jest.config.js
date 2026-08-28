/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/tools/awscc2cdk/test"],
  testMatch: ["**/*.test.ts"],
  testTimeout: 120000,
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { diagnostics: false },
    ],
  },
};
