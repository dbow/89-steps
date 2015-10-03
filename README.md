# 89-steps

### Development

1. Clone the repo
2. `$ npm install`
3. `$ npm run dev`

### Architecture

We are using [Fluxible](http://fluxible.io/) to provide an isomorphic [Flux](http://facebook.github.io/flux/) architecture and [React](https://facebook.github.io/react/) to implement view components.

The scaffold for the site was generated via the instructions [here](http://fluxible.io/quick-start.html):
```
$ npm install -g yo generator-fluxible
$ yo fluxible
```

### Stack

* [ES2015 (ES6) via Babel](https://babeljs.io/docs/learn-es2015/)
* [React](https://facebook.github.io/react/)
* [Fluxible](http://fluxible.io/)
* [Webpack](https://webpack.github.io/)

### Style

As always, consistency is key.
* **Indentation**

  * 2 spaces
  
* **Vertical whitespace**

  * 2 lines after imports
  * 2 lines before export
  * 1 line at the end of the file

  e.g.
  ```
  import React from 'react';
  // 2 vertical lines
  // after imports
  class Intro extends React.Component {
    render() {
      return (
        <div>
          <h2>Intro</h2>
          <p>Welcome to the site!</p>
        </div>
      );
    }
  }
  // 2 vertical lines
  // before export
  export default Intro;
  // 1 vertical line before EOF
  ```
  
* **Trailing commas in collections**
  
  Always include a trailing comma on the last item in a collection - it makes for easier diffs and updates later.

  e.g.
  ```
  var arr = [
    1,
    2,
    3, // <- trailing comma
  ];
  var obj = {
    a: 1,
    b: 2,
    c: 3, // <- trailing comma
  };
  ```
  Note: Historically, trailing commas like this caused problems in old versions of IE. But they will be compiled out in the assets that are served here so we can use them.
  
