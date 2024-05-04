module.exports = {
  "trailingComma": "es5",
  "tabWidth": 4,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "bracketSameLine": true,
  "overrides": [
      {
          "files": ["*.json", "*.cjs"],
          "options": {
              "trailingComma:": "none",
              "singleQuote": false,
              "tabWidth": 2,
              "quoteProps": "preserve"
          }
      }
  ]
}