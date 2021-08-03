# MyMovies Project

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#deployment">Deployment</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This app contains:
- A page listing different categories of movies. Each category shows a random movie from the list of results of requesting the first page of movies in that category. These movies are filtered to avoid repeating them in the following categories
- A category page (with infinite scroll pagination) to show its movies
- A detail page of a movie with detailed information
- An "Add to cart" button in movie's detail page
- A cart section to manage the movies already added
- A live search page

#### Api Note

There is a reported [bug](https://www.themoviedb.org/talk/5ee3abd1590086001f50b3c1) that some endpoints return duplicate items. Because of this, the results received in the requests are filtered before adding them to the items array.


### Built With

* [VueJs Version 2](https://vuejs.org/)
* [Vue CLI](https://cli.vuejs.org/)
* [Vue Router](https://router.vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)

### Deployment

The project has been deployed with Netlify: [Live demo](https://javiercl-mymovies.netlify.app)

## Getting Started

### Prerequisites

* node (12.22.1 or higher)
  ```sh
  sudo apt update
  sudo apt install nodejs
  ```

* npm (7.19.0 or higher)
  ```sh
  npm install npm@latest -g
  ```

* yarn (1.22.5 or higher)
  ```sh
  npm install yarn -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/javiercldeveloper/my-movies-project
   ```
2. Install NPM packages
   ```sh
   yarn
   ```

## Usage

- Compiles and hot-reloads for development
   ```sh
   yarn serve
   ```
- Compiles and minifies for production
   ```sh
   yarn build
   ```
- Run unit tests
   ```sh
   yarn test:unit
   ```

- Run e2e tests
   ```sh
   yarn test:e2e
   ```
  
- Lints and fixes files
   ```sh
   yarn lint
   ```

## Acknowledgements

### Npm packages

* [Axios](https://www.npmjs.com/package/axios)
* [Vue Infinite Loading](https://www.npmjs.com/package/vue-infinite-loading)
* [Jest](https://www.npmjs.com/package/jest)
* [Cypress](https://www.npmjs.com/package/@vue/cli-plugin-e2e-cypress)
* [Sass Loader](https://www.npmjs.com/package/sass-loader)

### Resources

* [The movie Database API](https://developers.themoviedb.org/3/getting-started/introduction)
* [Free Images from pexels](https://www.pexels.com/)
* [Free Icons from Iconmonstr](https://iconmonstr.com/)
