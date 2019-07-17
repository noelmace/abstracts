# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Please feel free to open an issue if you have any question or suggestion, or to directly create a Pull Request if you saw a typo or an error in one of our abstracts, or want to fix an issue in or Gatsby build system.

## talks abstracts

Our talks abstracts are written using markdown in [/src/pages/talks/](/src/pages/talks/).
Feel free to open a pull request or an issue if you see any typo, error, or simply what to discuss our abstracts content.

## Setup

> Install yarn on your system: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)

### Install dependencies

> Only required on the first run, subsequent runs can use `yarn` to both
bootstrap and run the development server using `yarn develop`.
Since this starter using the [netlify-lambda](https://github.com/netlify/netlify-lambda), there could be further issues you, please check the [Readme](https://github.com/netlify/netlify-lambda) for further information and set up questions.

```sh
$ git clone https://github.com/netlify-templates/gatsby-starter-netlify-cms
$ yarn 
```

## Available scripts

### `start`

Starts the development server. This task runs both the `start:app` and `start:lambda` scripts.

#### Usage

```sh
$ yarn start
```

### `build`

Build the static files into the `public` folder, turns lambda functions into a deployable form. This task runs both the `build:app` and `build:lambda` scripts.

#### Usage

```sh
$ yarn build
```

### `clean`

Removes all the files from `public`, `.cache` directories using the `rimraf` command.

#### Usage

```sh
yarn clean
```

### `develop`

Runs the `clean` script and starts the gatsby develop server using the command `gatsby develop`. Since this is not starting the lambda server it can be used when you only changing the site and not the lambda functions.

#### Usage

```sh
yarn develop
```

### `serve`

This command is shorthand for `gatsby serve` 

#### Usage

```sh
yarn serve
```

### `test`

Not implemented yet

#### Usage

```sh
yarn test
```

### `format`

Formats code and docs according to our style guidelines using `prettier`

#### Usage

```sh
yarn format
```

### `start:app`

Runs the `develop` command, this mapping is needed so we can start both gatsby and lambda with one command (`yarn start`).

#### Usage

```sh
yarn start:app
```

### `start:lambda`

Runs the `netlify-lambda` command, starts the lambda server in develop mode.

#### Usage

```sh
yarn start:lambda
```

### `build:app`

Builds the gatsby app

#### Usage

```sh
yarn build:app
```

### `build:lambda`

Runs the `netlify-lambda build` command, compiles the functions.

#### Usage

```sh
yarn build:lambda
```

## License

This website content is under [CC-BY-SA](https://creativecommons.org/licenses/by-sa/4.0/) license.

The code for this project is a fork of the Gatsby - Netlify CMS starter. Therefore, when you make a programming contribution, you agree that your contributions will be licensed under its [MIT license](LICENSE).
