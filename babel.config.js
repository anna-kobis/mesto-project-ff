const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        ie: "11",
        firefox: "50",
        chrome: "64",
        safari: "11.1",
      }
    },
  ],
];

const plugins = [
  [
    "polyfill-corejs3",
    {
      method: "usage-global",
      version: require("./package.json").dependencies["core-js"],
      proposals: false,
    },
  ],
];

module.exports = { presets, plugins };
