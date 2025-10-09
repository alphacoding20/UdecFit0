module.exports = function (api) {
  api.cache(true);

  const plugins = [];

  if (api.env() !== "test") {
    plugins.push("react-native-reanimated/plugin");
  }

  return {
    presets: ["babel-preset-expo"],
    plugins: plugins,
  };
};
