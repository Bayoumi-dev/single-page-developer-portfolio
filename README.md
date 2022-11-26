# Single Page Developer Portfolio
## Table of Contents

- [Overview](#overview)
- [Screenshot](#screenshot)
- [Built with](#-built-with)
- [Install](#install) (How it works)
- [Development mode](#development-mode)
- [Production mode](#production-mode)
- [The Project Structure](#the-project-structure)
- [Author](#author)

## Overview

This is a solution to the [Single-page developer portfolio](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). The purpose of this challenge is to improve my coding skills by building realistic projects.

## Screenshot

![Single-page developer portfolio](https://github.com/Bayoumi-dev/single-page-developer-portfolio/blob/master/design/preview.jpg)


## ⚙ Built with
#### Languages & Dependencies
- HTML5
- CSS3
- Bootstrap5
- JavaScript
- Babel 
- Postcss 
- Webpack 5 

## Install

### How it works
Clone the project or download ZIP
```bash
git clone https://github.com/Bayoumi-dev/single-page-developer-portfolio.git
```
You must install `Node js` on the local machine, then install the [`dependencies`](package.json) used in this project. Run the command in the root
```bash
npm install
```
## Development mode
Start webpack dev server with:
```bash
npm run dev
```
The webpack dev server listening on `port: 3000`

## Production mode
Run the following command to generate the `dist` folder
 ```bash
npm run dev
```
## The Project Structure
```bash
├── .browserslistrc
├── .gitignore
├── .prettierignore
├── babel.config.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── prettier.config.js
├── README.md
├── webpack.dev.js
├── webpack.prod.js
├── .vscode
├── design
└── src     
    ├── assets
    │   ├── fonts
    │   └── images
    ├── js
    │   ├── animation.js
    │   ├── app.js
    │   ├── handleMessageForm.js
    │   ├── handleScrollButton.js
    │   ├── htmlElements.js
    │   └── validation.js
    ├── style
    │   ├── animation.css
    │   ├── components.css
    │   ├── global.css
    │   ├── index.css 
    │   ├── reset.css
    │   ├── typography.css
    │   ├── utilities.css
    │   └── variable.css
    ├── views
    │   ├── favicon.ico
    │   └── index.html
    └── index.js
```

## Author
- Website - [bayoumi.dev](https://bayoumi.dev)
- Frontend Mentor - @Bayoumi-dev
