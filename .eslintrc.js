module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "no-underscore-dangle": [
      "error",
      { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }
    ]
  }
};
