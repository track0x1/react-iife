React-IIFE
=========================

A react.js wrapper component that allows you to invoke a function on mount.

## Installation

React-IIFE requires **React 15 or later.**

```
npm install --save react-iife
```

React-IIFE uses CommonJS-style requires, which assumes you are using a module bundler like Browserify or Webpack.

## Props

#### children [Node] `required`

The component you are hijacking.

#### fn [Function] `required`

The function you are calling within the context of your child component.

*Note: ES6 arrow functions can not be used here because they cause `this` argument to be ignored. [Read why...](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-function.prototype.call)*

## Usage

```jsx
const instantBake = function() {
    this.setState({ readyToEat: true });
}

<IIFE fn={instantBake}>
    <Cookie />
</IIFE>
```

### Why?

Sometimes you may want to force the state of a component or call a function the moment it is mounted. This can be beneficial when demoing components in a sandbox environment like [React storybook](https://github.com/kadirahq/react-storybook/).

## License

ISC
