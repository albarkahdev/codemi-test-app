# React Native Router (v4.x) [![Backers on Open Collective](https://opencollective.com/react-native-router-flux/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/react-native-router-flux/sponsors/badge.svg)](#sponsors) [![Join the chat at https://gitter.im/aksonov/react-native-router-flux](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aksonov/react-native-router-flux?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Codacy Badge](https://api.codacy.com/project/badge/grade/c6d869e2367a4fb491efc9de228c5ac6)](https://www.codacy.com/app/aksonov-github/react-native-router-flux) [![npm version](https://badge.fury.io/js/react-native-router-flux.svg)](http://badge.fury.io/js/react-native-router-flux) [![CircleCI](https://circleci.com/gh/aksonov/react-native-router-flux.svg?style=svg)](https://circleci.com/gh/aksonov/react-native-router-flux)

[Follow author @PAksonov](https://twitter.com/PAksonov)

`react-native-router-flux` is a different API over `react-navigation`. It helps users to define all the routes in one central place and navigate and communicate between different screens in an easy way. But it also means that `react-native-router-flux` inherits all [limitations](https://reactnavigation.org/docs/en/limitations.html) and changes from updated versions.

### IMPORTANT NOTES
#### v5.0.alpha.x is based on React Navigation v5.x (very early alpha, development in progress, help wanted!)

#### v4.2.x is based on [React Navigation v4.x](https://reactnavigation.org/docs/4.x/getting-started)

#### v4.1.0-beta.x is based on [React Navigation v3.x](https://reactnavigation.org/docs/en/3.x/getting-started.html)

#### v4.0.x is based on [React Navigation v2.x]. See [this branch](https://github.com/aksonov/react-native-router-flux/tree/v3) and [docs](https://github.com/aksonov/react-native-router-flux/blob/master/README3.md) for v3 based on deprecated React Native Experimental Navigation API. It is not supported and may not work with latest React Native versions.

#### v4.0.0-beta.x is based on [React Navigation v1.5.x](https://reactnavigation.org/). See [this branch](https://github.com/aksonov/react-native-router-flux/tree/v4.0.0-beta) for this version. It is also not supported and may not work with the latest React Native versions.

---

- [Examples](#try-the-example-apps)
- [Motivation](https://gist.github.com/aksonov/e2d7454421e44b1c4c72214d14053410)
- [v4 Features](#v4-features)
- [API](/docs/API.md)
- [Migrating from v3](/docs/MIGRATION.md)
- [Sponsors/Backers/Contributors](#contributors)

## Getting Started

1. Install native dependencies used by RNRF (see below, https://reactnavigation.org/docs/en/getting-started.html)
2. Install this component

```sh
yarn add react-native-router-flux
```

## install the following libraries first
1. react-native-screens by ( ``` npm install react-native-screens || yarn add react-native-screens ```)
2. react-native-gesture-handler ( ``` npm install react-native-gesture-handler || yarn add react-native-gesture-handler ```)
3. react-native-reanimated (``` npm install react-native-reanimated || yarn add react-native-reanimated ```)
4. react-native-safe-area-context (``` npm install react-native-safe-area-context || yarn add react-native-react-native-safe-area-context ```)
5. @react-native-community/masked-view (``` npm install @react-native-community/masked-view || yarn add @react-native-community/masked-view ```)



## Usage

Define all your routes in one React component...

```jsx
const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="register" component={Register} title="Register" />
      <Scene key="home" component={Home} />
    </Stack>
  </Router>
);
```

...and navigate from one scene to another scene with a simple and powerful API.

```jsx
// Login.js

// navigate to 'home' as defined in your top-level router
Actions.home(PARAMS);

// go back (i.e. pop the current screen off the nav stack)
Actions.pop();

// refresh the current Scene with the specified props
Actions.refresh({ param1: 'hello', param2: 'world' });
```

## API

For a full listing of the API, [view the API docs](https://github.com/aksonov/react-native-router-flux/blob/master/docs/API.md).

## Try the [example apps](https://github.com/aksonov/react-native-router-flux/tree/master/examples)

![rnrf](https://user-images.githubusercontent.com/3681859/27937441-ef61d932-626b-11e7-885f-1db7dc74b32e.gif)

```sh
# Get the code
git clone https://github.com/aksonov/react-native-router-flux.git
cd react-native-router-flux/examples/[expo|react-native|redux]

# Installing dependencies
yarn

# Run it
yarn start
```
