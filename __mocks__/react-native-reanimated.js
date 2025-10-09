// __mocks__/react-native-reanimated.js
const Reanimated = require("react-native-reanimated/mock");

Reanimated.default.call = () => {};

module.exports = Reanimated;
