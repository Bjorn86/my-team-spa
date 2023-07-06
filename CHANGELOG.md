# Изменения в пакет

## webpack.config.js

Обнаружил баг - настройки пресетов для babel в конфиге перебивали настройки из babel.config.js. Поэтому конфиг для обработки js и jsx переписан следующим образом (объединён потому, что теперь использует идентичные настройки):

```javascript
{
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  },
},
```

из `test: /\.ts$/` удалено:

```javascript
options: {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
},
```

## babel.config.js

Для возможности не указывать импорт `react` в каждом компоненте в `@babel/preset-react` добавлено:

```javascript
[
  '@babel/preset-react',
  {
    runtime: 'automatic',
  },
],
```
