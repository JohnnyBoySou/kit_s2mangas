module.exports = {
  source: "src",
  output: "lib",
  targets: ["commonjs", "module", "typescript"],
  typescript: {
    declaration: true,
    declarationMap: true,
    tsconfig: "tsconfig.build.json"
  }
};
