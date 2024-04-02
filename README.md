# Webpack 5.90.1 -> 5.91.0

[DESIGNSYSTEM-292](https://jira.dev.bbc.co.uk/browse/DESIGNSYSTEM-292)

Steps to recreate:

```
npm checkout main
npm ci
npm run pack // webpack@5.91.0
npm start // error

npm checkout old-webpack
npm ci
npm run pack // webpack@5.90.1
npm start // works fine
```
