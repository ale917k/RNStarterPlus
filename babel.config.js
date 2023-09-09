module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          assets: "./assets",
          src: "./src",
          "@api": "./src/api",
          "@components": "./src/components",
          "@features": "./src/features",
          "@hooks": "./src/hooks",
          "@navigation": "./src/navigation",
          "@redux": "./src/redux",
          "@screens": "./src/screens",
          "@theme": "./src/theme",
          "@customTypes": "./src/types",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
