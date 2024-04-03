# Webpack 5.90.2 Bug

Steps to recreate:

```
npm i webpack@5.90.1
npm test // works fine

npm i webpack@5.90.2
npm test // error

npm i webpack@5.91.0
npm test // error
```
