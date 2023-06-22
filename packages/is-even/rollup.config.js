const { defineConfig } = require("rollup");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const pkg = require("./package.json");

module.exports = defineConfig({
  input: "lib/index.ts",
  output: [
    {
      file: "build/commonjs/index.js",
      format: "cjs",
    },
    {
      file: "build/module/index.js",
      format: "es",
    },
  ],
  plugins: [
    typescript(),
    terser({
      format: {
        comments: false,
      },
    }),
  ],
  external: [...Object.keys(pkg.dependencies)],
});
