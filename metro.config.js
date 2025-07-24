const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

let config = getDefaultConfig(__dirname);

// Add NativeWind to the Metro config
config = withNativeWind(config, { input: './global.css' });

// Wrap it with Reanimated's Metro config enhancer
config = wrapWithReanimatedMetroConfig(config);

module.exports = config;
