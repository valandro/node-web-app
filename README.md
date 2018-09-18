# Node Web App
It's a simple NodeJS Web app with Babel and Express.

### What is Babel?
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

* Transform syntax
* Polyfill features that are missing in your target environment (through @babel/polyfill)
* Source code transformations (codemods)
* And more! (check out these videos for inspiration)

### What is Express?
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

### Scripts

* *npm run start* : Run the application on bin/dev using babel-register
* *npm run build* : Use babel to compile the server/ into dist/

### Depedencies

```json
  "dependencies": {
    "express": "^4.16.3"
  },
  "devDependencies": {
    "nodemon": "^1.18.4",
    "babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-register": "^6.26.0"
  }
```

### License
MIT License -see the [LICENSE.md](LICENSE.md) for more details.