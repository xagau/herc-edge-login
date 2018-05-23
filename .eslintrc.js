module.exports = {
    "extends": "google",
    "extends": "eslint-config-google",
    "parser": "babel-eslint",
    "rules": {
    "strict": 0
  },
  "require-jsdoc": [ 2,
        {
            "require":
            {
                "FunctionDeclaration" : true,
                "MethodDefinition" : true,
                "ClassDeclaration" : true
            },
            "ignore":
            {
                "MethodDefinition" : ["render", "constructor", "componentDidMount"],
            }
        }],
//   "parserOptions": {
//   "sourceType": "module",
//   "allowImportExportEverywhere": false,
//   "codeFrame": false
// }
};
