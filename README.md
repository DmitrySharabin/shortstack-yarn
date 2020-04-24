### CSS
[PostCSS](https://postcss.org) to  **bundle**, **import from NPM, local or remote URLs**, handy [easings](https://easings.net), plus [postcss-preset-env](https://preset-env.cssdb.org/) for **latest CSS features**. 

### JS
[Rollup](https://rollupjs.org) to **bundle**, **treeshake**, **import from NPM, local or remote URLs**, **import processed CSS**, plus [babel-preset-env](https://babeljs.io/docs/en/babel-preset-env) for **latest JS features**. 

### Servers
[Browsersync](https://www.browsersync.io) with all the goodies for local dev: **live reload**, **hot swap CSS**, **scroll syncing**, **remote debugging**, [etc](https://www.browsersync.io). Prod server is just a static server.

<br>

> Watch me break it down on [YouTube!](https://links.argyle.ink/shortstack)

<br><br>

## Getting Started

#### Clone Shortstack into a new folder
1. `mkdir new-project-name && cd $_`
1. `git clone --depth=1 https://github.com/DmitrySharabin/shortstack-yarn.git . && rm -rf ./.git`

#### Install tools and spin it up
1. `yarn`
1. `yarn start`

<br><br>

## Development
Running `yarn start` runs Browsersync, Rollup and Postcss concurrently, watching changes to your files in `./src` and refreshes connected browsers.

## Production
Running `yarn build` compiles and minifies your code in `src` and outputs the optimised result to a folder called `dist` that's ready for static hosting.

Running `yarn production` will build your project and start a server at `dist`.
