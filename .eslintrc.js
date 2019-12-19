module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    "no-console": "off",
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // add your custom rules here
    // allow async-await
    // 'generator-star-spacing': 'off',
    // 要求或禁止使用分号代替 ASI 这里是禁用此规则
    // 'semi': 0,
    // 禁止使用多余空格
    // 'no-multi-spaces': 0,
    // 'indent': 0
    // 'indent': ['error', 4, {'SwitchCase': 1}],
    // 'space-before-function-paren': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
