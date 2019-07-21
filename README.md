# `elm-asset-webpack-loader`

Webpack loader for assets (like images or fonts) in Elm programming language

## Usage

```elm
img [ src "require:src/assets/logo.svg" ] []
```

## Goal

### Path safety

The build should fail at compile time if an asset path is used, that isn't existing or misspelled.

### Webpack loaders

With this approach any webpack loader can be used. Use cases can be to hash file names, to optimize images and more. See [awesome-webpack#loaders](https://github.com/webpack-contrib/awesome-webpack#loaders).
