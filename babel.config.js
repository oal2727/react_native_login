module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // simillary to ts.config.json
          components: "./src/components",
          common:"./src/common",
          screensPublic:"./src/screens/public",
          screensPrivate:"./src/screens/private"
        },
      },
    ],
  ],
};
