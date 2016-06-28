# Webpack + React/Redux + Rails Boilerplate

A boilerplate for creating React and Redux applications with a Rails backend.

# Getting Started

## Installation

```
$ git clone git@github.com:HunterFortuin/rails-webpack-react-redux-boilerplate.git
$ cd rails-webpack-react-redux-boilerplate
```

You'll need to pull in all the Node and Rails dependencies through NPM and Bundler.

```
$ bundle install
$ npm install
```

After this you'll need to configure your Rails part of the project.
```
$ cp config/example_database.yml config/database.yml
$ rake db:create
$ rake db:migrate
```

We're using [foreman](https://github.com/ddollar/foreman) to run Webpack and the Rails Server at the same time. You'll need to install the gem globally in order to do this.
```
$ gem install foreman
$ foreman start -f Procfile-dev
```

## Utilizing the Asset Pipeline For Part Of Your App

The beauty of keeping all of this under one roof is that you can still utilize the asset pipeline for a section of your app, say an admin panel that will look/behave drastically different than the rest of your application. For a sample implementation checkout the [admin-panel-example](https://github.com/HunterFortuin/rails-webpack-react-redux-boilerplate/tree/admin-panel-example) branch.

# Deployment to Heroku
First you'll need to create an empty Heroku app.

```
$ heroku create webpack-rails
```

Since we're using both Rails AND Node we'll need to configure multiple buildpacks.

```
$ heroku buildpacks:clear
$ heroku buildpacks:set heroku/nodejs
$ heroku buildpacks:add heroku/ruby --index 2
```

The `--index 2` tells Heroku to add the Ruby buildpack after the Node one. This is important since Webpack will need to build/bundle our Javascript before Rails precompiles our bundle.

One gotcha is that your dev dependencies in the `package.json` will not be installed on Heroku. In order to fix this run...

```
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

Upon deploying your application, Heroku will execute the `postinstall` script in the `package.json`. This script runs Webpack for you once all your NPM modules have been installed.

Now it's as easy as deploy!

```
$ git push heroku master
```
And of course creating your DB.

```
$ heroku run rake db:migrate
```
