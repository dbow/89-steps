# 89-steps

### Development

1. Clone the repo
2. `$ npm install`
3. `$ npm run dev`
4. Navigate to [http://localhost:3000](http://localhost:3000). (The server says it's running on port 3001 but webpack is proxying to it).

This runs `webpack-dev-server.js` based on the `webpack.config.js` file.

*Webpack will hot reload CSS or JS whenever any files change!*

Note: In development mode, styles are added at the component level via a `<style>` tag when required. i.e. There is no CSS file generated.

### Production

1. `$ npm run build` to build the JS and CSS assets into the `/build` directory via the `webpack.config.production.js` file.
2. `$ npm run start` to run the server in production mode.

Note: In production mode, webpack uses the [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin) mentioned [here](http://webpack.github.io/docs/stylesheets.html#separate-css-bundle) to bundle all the component-level CSS into one `main.css` file that is requested in the document `<head>`. Eventually, inline styles might be desirable as part of the server rendering (similar to the approach [here](https://github.com/webpack/react-webpack-server-side-example)).


### Architecture

We are using [Fluxible](http://fluxible.io/) to provide an isomorphic [Flux](http://facebook.github.io/flux/) architecture and [React](https://facebook.github.io/react/) to implement view components.

The scaffold for the site was generated via the instructions [here](http://fluxible.io/quick-start.html):
```
$ npm install -g yo generator-fluxible
$ yo fluxible
```

Styles should be required at the component level to take advantage of webpack's bundling capabilities. However, server-side rendering causes problems detailed [here](http://stackoverflow.com/questions/30347722/importing-css-files-in-isomorphic-react-components). So always check the `BROWSER` variable (added via webpack config) before requiring `.scss` files:
```
if (process.env.BROWSER) {
  require('./app.scss');
}
```

### Stack

* [ES2015 (ES6) via Babel](https://babeljs.io/docs/learn-es2015/)
* [React](https://facebook.github.io/react/)
* [Fluxible](http://fluxible.io/)
* [SASS](http://sass-lang.com/)
* [Webpack](https://webpack.github.io/)

### JS Style Guide

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
  
