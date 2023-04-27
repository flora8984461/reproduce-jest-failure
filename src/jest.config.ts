import type { Config } from "@jest/types";

// Common settings for all jest tests
// Can be imported into each package's jest config
export const sharedConfig: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};
