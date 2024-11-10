const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Add rn-design-system as an additional node module search path
config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../rn-design-system/node_modules"),
];

// Add watch folders
config.watchFolders = [path.resolve(__dirname, "../rn-design-system")];

// Exclude node_modules within rn-design-system
config.resolver.blacklistRE = /..\/rn-design-system\/node_modules\/.*/;

module.exports = config;

// const { getDefaultConfig } = require("expo/metro-config");
// const path = require("path");
// const exclusionList = require("metro-config/src/defaults/exclusionList");

// const config = getDefaultConfig(__dirname);

// config.resolver.nodeModulesPaths = [
//   path.resolve(__dirname, "node_modules"),
//   path.resolve(__dirname, "../rn-design-system/dist"),
// ];

// config.watchFolders = [path.resolve(__dirname, "../rn-design-system/dist")];

// config.resolver.blacklistRE = exclusionList([
//   /..\/rn-design-system\/node_modules\/.*/,
// ]);

// module.exports = config;
