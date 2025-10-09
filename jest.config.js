module.exports = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|expo|@expo|@react-navigation|react-native-reanimated)/)",
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  testEnvironment: "jsdom",

  // 👇 Ignorar el plugin de reanimated durante los tests
  moduleNameMapper: {
    "react-native-reanimated/plugin":
      "<rootDir>/__mocks__/reanimatedPluginMock.js",
  },
};
