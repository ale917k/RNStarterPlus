module.exports = {
  printWidth: 100,
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^src/",
    "^@(api|components|config|features|hooks|navigation|redux|screens|theme|customTypes|utils)/(.*)$",
    "^[../]",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: ["@prettier/plugin-xml"],
  xmlWhitespaceSensitivity: "ignore",
};
