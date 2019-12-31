module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  globals: {
    require: true,
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
//   plugins: [
//     "prettier"
//   ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {}
};
