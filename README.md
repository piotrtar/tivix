# # tivix

This project uses [Cypress](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
with [TypeScript](https://docs.cypress.io/guides/tooling/typescript-support)

## System requirements

* Actual requirements can be found
  in [Cypress documentation](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

## Instalation guide

* If node.js is not installed install it (16 or above as specified in package.json `engines` property)

* If you are Mac user you can install node.js using homebrew via command:

```
brew install node
```

* Or you can use [volta](https://docs.volta.sh/guide/)

```
volta install node
```

## Setting up the project on your machine after cloning the repository

* After cloning the repository it's enough to run the command:

```
npm install
```

## Opening Cypress test runner

* To open cypress test runner run the command:

```
npm run cypress:open
```

## Running Cypress tests in headless mode

* To run cypress tests in headless mode run the command:

```
npm run cypress:headless
```