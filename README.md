# `elm-asset-webpack-loader`

Webpack loader for assets (like images or fonts) in Elm programming language

## Usage

```elm
img [ src "require:src/assets/logo.svg" ] []
```

## Goals

### Path safety

The build should fail at compile time if an asset path is used, that isn't existing or misspelled.

### Webpack loaders

With this approach any webpack loader can be used. Use cases can be to hash file names, to optimize images and more. See [awesome-webpack#loaders](https://github.com/webpack-contrib/awesome-webpack#loaders).

## Other approaches

* [`elm-assets-loader`](https://github.com/NoRedInk/elm-assets-loader) is a comparable approach, and is probably more sophisticated. The package is marked as deprecated.
* It's possible to require files in JavaScript and pass them as flags to Elm.
