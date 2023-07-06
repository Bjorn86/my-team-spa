# Template-проекта на React и Webpack

## Оглавление

- [Модули и плагины в пакете](#модули-и-плагины-в-пакете)
- [Сценарии запуска](#сценарии-запуска)
- [Конфигурация Webpack](#конфигурация-webpack)
- [Конфигурация PostCSS](#конфигурация-postcss)
- [Конфигурация Babel](#конфигурация-babel)
- [Конфигурация ESLint](#конфигурация-eslint)
- [Конфигурация Prettier](#конфигурация-prettier)
- [Возможности расширения конфигурации сборки](#возможности-расширения-конфигурации-сборки)
  - [Увеличение количества точек входа](#увеличение-количества-точек-входа)
  - [Оптимизация библиотек при использовании нескольких точек входа](#оптимизация-библиотек-при-использовании-нескольких-точек-входа)
  - [Понимаемые расширения файлов](#понимаемые-расширения-файлов)
  - [Псевдонимы (alias)](#псевдонимы-alias)
  - [Вставка контента по умолчанию в HTML файл](#вставка-контента-по-умолчанию-в-html-файл)
  - [Вынос массива загрузчиков CSS файлов в функцию](#вынос-массива-загрузчиков-css-файлов-в-функцию)
  - [Вынос массива пресетов Babel в функцию](#вынос-массива-пресетов-babel-в-функцию)
  - [Динамический импорт библиотек с Lodash](#динамический-импорт-библиотек-с-lodash)
  - [Использование препроцессора Less](#использование-препроцессора-less)
  - [Анализ бандла](#анализ-бандла)
- [Импорт](#импорт)
  - [Импорт JS файлов](#импорт-js-файлов)
  - [Импорт JS библиотек установленных из NPM](#импорт-js-библиотек-установленных-из-npm)
  - [Импорт JSON файлов](#импорт-json-файлов)
  - [Импорт CSS\\Less\\Sass\\Scss файлов](#импорт-csslesssassscss-файлов)
  - [Импорт CSS библиотек установленных из NPM](#импорт-css-библиотек-установленных-из-npm)
  - [Импорт XML файлов](#импорт-xml-файлов)
  - [Импорт CSV файлов](#импорт-csv-файлов)
- [Заметки о сборке](#заметки-о-сборке)
  - [Приватный режим](#приватный-режим)
  - [Обработка CSS файлов](#обработка-css-файлов)

## Модули и плагины в пакете

- Webpack и его функционал:
  - [```webpack```](https://webpack.js.org/) - сборщик проекта.
  - [```webpack-cli```](https://www.npmjs.com/package/webpack-cli) - модуль для взаимодействия с Webpack через консоль.
  - [```clean-webpack-plugin```](https://www.npmjs.com/package/clean-webpack-plugin) - плагин для удаления неиспользуемых в проекте файлов.
  - [```webpack-dev-server```](https://www.npmjs.com/package/webpack-dev-server) - модуль локального сервера.
- Работа с HTML файлами:
  - [```html-webpack-plugin```](https://www.npmjs.com/package/html-webpack-plugin) - плагин для обработки HTML файлов с помощью Webpack.
- Работа с CSS файлами:
  - [```css-loader```](https://www.npmjs.com/package/css-loader) - загрузчик для импортов CSS файлов в JS файлах.
  - [```mini-css-extract-plugin```](https://www.npmjs.com/package/mini-css-extract-plugin) - плагин для обработки CSS файлов.
  - [```css-minimizer-webpack-plugin```](https://www.npmjs.com/package/css-minimizer-webpack-plugin) - плагин для минимизации CSS файлов (основан на cssnano).
  - [```postcss```](https://postcss.org/) - обработчик CSS файлов для добавления вендорных префиксов, работы переменных и миксинов.
  - [```postcss-loader```](https://www.npmjs.com/package/postcss) - загрузчик CSS файлов обрабатывающий их с помощью PostCSS.
  - [```postcss-preset-env```](https://www.npmjs.com/package/postcss-preset-env) - набор пресетов для PostCSS.
  - [```sass```](https://www.npmjs.com/package/sass) - библиотека препроцессора Sass\Scss.
  - [```sass-loader```](https://www.npmjs.com/package/sass-loader) - загрузчик Sass\Scss файлов.
- Работа с JS файлами:
  - [```terser-webpack-plugin```](https://www.npmjs.com/package/terser-webpack-plugin) - плагин для минимизации JS файлов.
  - [```typescript```](https://www.typescriptlang.org/) - плагин TypeScript.
  - Babel:
    - [```@babel/core```](https://babeljs.io/) - ядро Babel.
    - [```babel-loader```](https://www.npmjs.com/package/babel-loader) - загрузчик JS файлов.
    - [```@babel/preset-env```](https://babeljs.io/docs/en/babel-preset-env) - набор пресетов Babel.
    - [```@babel/preset-typescript```](https://babeljs.io/docs/en/babel-preset-typescript) - набор пресетов для TypeScript.
    - [```@babel/preset-react```](https://babeljs.io/docs/en/babel-preset-react) - набор пресетов для React.
    - [```core-js```](https://www.npmjs.com/package/core-js) - библиотека полифилов для Babel.
  - React:
    - [```react```](https://reactjs.org/) - фреймворк React
    - [```react-dom```](https://reactjs.org/docs/react-dom.html) - служит точкой входа в DOM и серверные средства визуализации для React
    - [```react-router-dom```](https://reactrouter.com/en/main) - модуль React Router для навигации внутри SPA.
- Работа с прочими файлами
  - [```xml-loader```](https://www.npmjs.com/package/xml-loader) - загрузчик XML файлов.
  - [```csv-loader```](https://www.npmjs.com/package/csv-loader) - загрузчик CSV файлов.
  - [```papaparse```](https://www.npmjs.com/package/papaparse) - модуль необходимый для обработки CSV файлов (без него не работает ```csv-loader```).
  - [```copy-webpack-plugin```](https://www.npmjs.com/package/copy-webpack-plugin) - плагин для копирования отдельных файлов или директорий в директорию ```/dist```.
- Прочии:
  - [```cross-env```](https://www.npmjs.com/package/cross-env) - модуль позволяющий определять значение переменной NODE_ENV вне зависимости от используемой ОС.
  - [```eslint```](https://eslint.org/) - линтер JS.
  - [```eslint-config-react-app```](https://www.npmjs.com/package/eslint-config-react-app) - модуль с пресетом плагинов и настроек из ```create-react-app```.
  - [```prettier```](https://prettier.io/) - плагин для форматирования кода.

## Сценарии запуска

- ```npm start``` - режим разработки с запуском локального сервера. Также при запуске определяет переменную ```NODE_ENV=development```, позволяющую использовать в сценарии некоторые функции используемые только в режиме разработки.
- ```npm run dev``` - режим разработки. Также при запуске определяет переменную ```NODE_ENV=development```, позволяющую использовать в сценарии некоторые функции используемые только в режиме разработки.
- ```npm run build``` - режим Production. Также при запуске определяет переменную ```cross-env NODE_ENV=production```.
<!-- - ```nom run stats``` - режим вывода статистики по занимаемому файлами и библиотеками месту. -->

## Конфигурация Webpack

Файл ```webpack.config.js```:

```javascript
// Встроенный модуль node.js для работы с путями
const path = require('path');
// Плагин для обработки HTML файлов
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Плагин для удаления неиспользуемых в проекте файлов
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// Плагин для копирования отдельных файлов или директорий в директорию /dist
const CopyWebpackPlugin = require('copy-webpack-plugin');
// Плагин для минимизации CSS файлов
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// Плагин для минимизации JS файлов
const TerserPlugin = require('terser-webpack-plugin');

// Переменная имеющая значение true когда мы находимся в режиме разработки
const isDev = process.env.NODE_ENV === 'development';
// Переменная имеющая значение true когда мы находимся в режиме production
const isProd = !isDev;

// Функция передающая объект м плагинами минимизации в режиме production
const optimization = () => {
  // Создаём объект конфигурации
  const config = {
    // Настройка позволяющая выделять файлы библиотек использующиеся в
    // нескольких файлах в отдельный файл, для исключению дублирования
    // кода библиотеки
    splitChunks: {
      chunks: 'all'
    }
  };
  // Условие добавляющие плагины для минимизации кода в режиме production
  if (isProd) {
    config.minimizer = [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  };
  return config;
}

// Функция с помощью которой задаются имена файлов в зависимости от режима
// Для формирования названия в режиме production применёны: паттерн - [name],
// который будет добавлять префикс к имени файла в виде ключа из объекта entry;
// паттерн - [hash] который будет добавлять к имени файла хеш запись
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  // Режим разработки как режим работы по умолчанию
  mode: 'development',
  // Точка входа
  entry: {
    // Основной JSX файл
    main: './pages/index.jsx',
  },
  // Точка вывода
  output: {
    // Путь к точке вывода (__dirname - текущая папка)
    path: path.resolve(__dirname, 'dist')
    // Правила формирования имени файла и путь для хранения
    filename: `./static/js/${filename('js')}`
  },
  // Секция оптимизации
  optimization: optimization(),
  // Создание source-map в режиме разработки
  devtool: isDev ? 'source-map' : false,
  // Модуль локального сервера
  devServer: {
    // Говорит откуда брать статические файлы (по умолчанию из /src)
    static: path.resolve(__dirname, './dist'),
    // Включает сжатие
    compress: true,
    // Порт на котором будет работать локальный сервер
    port: 8080,
    // Автоматически открывать браузер
    open: {
      // Выбор браузера
      app: {
        // Название браузера
        name: 'chrome',
        // Флаги используемые при запуске. В данном случае запускать с
        // открытыми DevTools
        arguments: ['--auto-open-devtools-for-tabs'],
      },
    },
    // Изменяет определённые сущности без перезагрузки страницы. Должен
    // работать только в режиме разработки, поэтому его значение определенно
    // переменной isDev
    hot: isDev,
    // Обновление страницы при изменении файлов
    liveReload: true,
    // Позволяет использовать History API необходимый для многостраничных SPA
    historyApiFallback: true,
  },
  // Подключение плагинов
  plugins: [
    // Плагин для обработки HTML файлов
    new HtmlWebpackPlugin({
      // Позволяет использовать в качестве базового шаблона корневой HTML файл
      template: './src/index.html'
    }),
    // Плагин для удаления неиспользуемых в проекте файлов
    new CleanWebpackPlugin(),
    // Плагин для копирования отдельных файлов или директорий в директорию /dist
    new CopyWebpackPlugin([
      {
        // Что копируем
        from: path.resolve(__dirname, 'src/favicon.ico'),
        // Куда копируем
        to: path.resolve(__dirname, 'dist')
      },
      {
        // Что копируем
        from: path.resolve(__dirname, 'src/favicon.svg'),
        // Куда копируем
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
    // Плагин для обработки CSS файлов
    new MiniCssExtractPlugin({
      // Правила формирования имени файла и путь для хранения
      filename: `./static/css/${filename('css')}`
    }),
  ],
  // Подключение модулей
  module: {
    // Создание правил для обработки файлов
    rules: [
      // Правила для обработки CSS файлов
      {
        // Регулярное выражение ищущие CSS файлы
        test: /\.css$/,
        // Модули использующиеся для обработки CSS файлов. Чтение модулей и
        // обработка файлов идёт справа-налево!
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          // Опции css-loader. Указывает сколько загрузчиков должно быть
          // применено перед css-loader. В данном случае один - postcss-loader
          options: {
            importLoaders: 1,
          },
        }, 'postcss-loader']
      },
      {
        // Регулярное выражение ищущие Sass\Scss файлы
        test: /\.s[ac]ss$/,
        // Модули использующиеся для обработки CSS файлов. Чтение модулей и
        // обработка файлов идёт справа-налево!
        use: [
          MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            // Опции css-loader. Указывает сколько загрузчиков должно быть
            // применено перед css-loader. В данном случае два - postcss-loader
            // и sass-loader
            options: { importLoaders: 2 }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            // Настройки необходимы для нормального импорта переменных и миксинов
            options: {
              additionalData: `
                @import "src/components/Common/Mixins.scss";
                @import "src/components/Common/Variables.scss";
              `,
            },
          },
        ]
      },
      // Правила обработки JS файлов
      {
        // Регулярное выражение ищущие JS файлы
        test: /\.m?js$/,
        // Директории исключённые из поиска
        exclude: '/node_modules/',
        // Модули использующиеся для обработки JS файлов
        use: {
          loader: "babel-loader",
          // Опции обработки файлов
          options: {
            // Использовать пресет @babel/preset-env
            presets: ['@babel/preset-env']
          }
        }
      },
      // Правила обработки TypeScript файлов
      {
        // Регулярное выражение ищущие TS файлы
        test: /\.ts$/,
        // Директории исключённые из поиска
        exclude: '/node_modules/',
        use: {
          // Модули использующиеся для обработки TS файлов
          loader: "babel-loader",
          // Опции обработки файлов
          options: {
            // Использовать пресет @babel/preset-env и @babel/preset-typescript
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      // Правила обработки React файлов
      {
        // Регулярное выражение ищущие React файлы
        test: /\.jsx$/,
        // Директории исключённые из поиска
        exclude: '/node_modules/',
        use: {
          // Модули использующиеся для обработки React файлов
          loader: "babel-loader",
          // Опции обработки файлов
          options: {
            // Использовать пресет @babel/preset-env и @babel/preset-react
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      // Правила обработки изображений
      {
        // Регулярное выражение для поиска изображений
        test: /\.(png|jpe?g|svg|gif)$/i,
        // Тип ресурса
        type: 'asset/resource',
        // Генератор имени файла и путь размещения
        generator: {
          filename: 'images/[name].[hash][ext]',
        }
      },
      // Правила обработки шрифтов
      {
        // Регулярное выражение для поиска шрифтов
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        // Тип ресурса
        type: 'asset/resource',
        // Генератор имени файла и путь размещения
        generator: {
          filename: 'fonts/[name].[hash][ext]',
        }
      },
      // Правила обработки XML файлов
      {
        // Регулярное выражение для поиска XML файлов
        test: /\.xml$/,
        // Модули использующиеся для обработки XML файлов
        use: ['xml-loader']
      },
      {
        // Регулярное выражение для поиска CSV файлов
        test: /\.csv$/,
        // Модули используемые для обработки CSV файлов
        use: ['csv-loader']
      },
    ]
  }
}
```

## Конфигурация PostCSS

Файл ```postcss.config.js```:

```javascript
module.exports = {
  // Подключаемые плагины PostCSS
  plugins: [
    [
      // Набор пресетов PostCSS
      "postcss-preset-env",
    ],
  ],
};
```

## Конфигурация Babel

Файл ```babel.config.js```:

```javascript
// Определяем массив пресетов
const presets = [
  ['@babel/preset-env', {
    // Поддерживаемые версии браузеров
    targets: {
      edge: '17',
      ie: '11',
      firefox: '50',
      chrome: '64',
      safari: '11.1'
    },
    // Определяет как Babel будет обрабатывать полифилы. entry - добавляет
    // прямые ссылки на corejs в качестве простого импорта
    useBuiltIns: "entry",
    // Версия библиотеки полифилов
    corejs: '3.29'
  }],
  ["@babel/preset-typescript"],
  ['@babel/preset-react']
];

// Экспортируем пресеты
module.exports = { presets };
```

## Конфигурация ESLint

Файл ```.eslintrc.json```:

```json
{
  // Наследование правил от модулей
  "extends": "react-app"
}
```

Также в проект добавлен файл ```.eslintignore``` добавляющий исключения файлов из ESLint.

## Конфигурация Prettier

Файл ```.prettier.json```:

```json
{
  // Максимальная длина строки
  "max-len": ["error", 140, 2],
  // Количество отступов новой строки
  "tabWidth": 2,
  // Использование табуляции
  "useTabs": false,
  // Использование точек с запятой в конце конструкций
  "semi": true,
  // Использование одинарных кавычек
  "singleQuote": true,
  // Использование комментариев
  "quoteProps": "as-needed",
  // Использование одинарных кавычек в jsx файлах
  "jsxSingleQuote": true,
  // Использование запятых везде где только можно
  "trailingComma": "all",
  // Добавление пробелов в литералах объекта
  "bracketSpacing": true,
  // Возможность переноса закрывающей скобки в HTML тегах
  "bracketSameLine": false,
  // Заключение в скобки единственного параметра стрелочной функции
  "arrowParens": "always",
  // Сохранение пробелов в HTML документе
  "htmlWhitespaceSensitivity": "strict",
  // Окончание строки
  "endOfLine": "lf"
}
```

Также в проект добавлен файл ```.prettierignore``` добавляющий исключения файлов из Prettier.

## Возможности расширения конфигурации сборки

### Увеличение количества точек входа

Если нам необходимо более одной точки входа, этого можно добиться добавив соответствующую запись в объект ```entry```. Например:

```javascript
entry: {
  main: './src/pages/index.js',
  analytics: './src/utils/analytics.js'
},
```

### Оптимизация библиотек при использовании нескольких точек входа

Допустим мы используем библиотеку JQuery в наших файлах которе являются точками входа. Тогда при сборке проекта получится ситуация, что Webpack добавит код этой библиотеки в каждый выходной файл. Чтобы избежать подобной ситуации можно добавить в конфигурационный файл Webpack следующую запись:

```javascript
optimization: {
  splitChunks: {
    chunks: 'all'
  }
},
```

В этом случае будет создан отдельный файл с библиотекой, который будет импортирован в выходные файлы.

### Понимаемые расширения файлов

Для того чтобы иметь возможность не указывать расширения тех или иных файлов при импорте, в конфигурационный файл Webpack можно добавить следующую запись:

```javascript
resolve: {
  // Указываем расширения файлов
  extensions: ['.js', '.json'],
}
```

### Псевдонимы (alias)

Для того чтобы иметь возможность записывать путь к файлам в коротком формате, мы можем использовать псевдонимы. Для этого в файле конфигурации Webpack можно добавить следующую запись:

```javascript
resolve: {
  // Записываем псевдонимы
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@components': path.resolve(__dirname, 'src/components/'),
  }
}
```

### Вставка контента по умолчанию в HTML файл

С помощью плагина ```html-webpack-plugin``` можно вставлять контент по умолчанию в HTML файл, для этого в вызов экземпляра класса данного плагина, в массиве ```plugins```, нужно добавить объект. Например:

```javascript
plugins: [
  new HtmlWebpackPlugin({
    title: 'My App',
  })
]
```

### Вынос массива загрузчиков CSS файлов в функцию

Для того чтобы не переписывать каждый раз правила обработки CSS\Less\Sass\Scss файлов, можно создать функцию возвращающую массив загрузчиков, расширяемую с помощью аргументов при её вызове:

```javascript
const cssLoaders = addModule => {
  // Основная шаблонная запись массива
  const loaders = [MiniCssExtractPlugin.loader, {
    loader: 'css-loader',
    options: { importLoaders: 1 }
  },
  'postcss-loader']
  // Условие расширения. Если мы передаём аргумент при вызове функции, то он
  // добавляется в конец массива
  if (addModule) {
    loaders.push(addModule);
  }
  return loaders;
}
```

Вызов функции будет иметь следующий вид:

```javascript
{
  test: /\.s[ac]ss$/,
  use: cssLoaders('sass-loader')
},
```

### Вынос массива пресетов Babel в функцию

Для того чтобы сократить запись пресетов Babel при обработке JS\TS\React файлов, можно создать функцию возвращающую массив пресетов, расширяемую с помощью аргументов при её вызове:

```javascript
const babelOptions = (preset) => {
  // Основная шаблонная запись массива
  const options = {
    presets: ['@babel/preset-env']
  }
  // Условие расширения. Если мы передаём аргумент при вызове функции, то он
  // добавляется в конец массива
  if (preset) {
    options.presets.push(preset);
  }
  return options;
}
```

Вызов функции будет иметь следующий вид:

```javascript
{
  test: /\.ts$/,
  exclude: '/node_modules/',
  use: {
    loader: "babel-loader",
    options: {
      presets: babelOptions('@babel/preset-typescript')
    }
  }
},
```

### Динамический импорт библиотек с Lodash

Пакет можно расширить путём установки Lodash ([```npm i lodash```](https://www.npmjs.com/package/lodash)), для того чтобы сторонние библиотеки не попадали в бандл, а динамически импортировались.

### Использование препроцессора Less

Для возможности использования препроцессора Less необходимо установить модуль загрузчика [```less-loader```](https://www.npmjs.com/package/less-loader), а также саму библиотеку [```less```](https://www.npmjs.com/package/less). Правила обработки файлов будут выглядеть следующим образом:

```javascript
{
  test: /\.less$/,
  use: [MiniCssExtractPlugin.loader, {
    loader: 'css-loader',
    options: { importLoaders: 2 }
    },
  'postcss-loader', 'less-loader']
},
```

Импорт Less файлов в JS выглядит точно также как и импорт CSS файлов.

### Анализ бандла

Для анализа бандла можно установить модуль [```webpack-bundle-analyzer```](https://www.npmjs.com/package/webpack-bundle-analyzer) с флагом ```-D```, который в визуально будет показывать какая библиотека сколько занимает места. Данный модуль можно также запустить отдельным сценарием, для этого у него есть возможность работать через консоль.

## Импорт

### Импорт JS файлов

Для импорта JS файлов Webpack не требуется дополнительных модулей. Запись импорта имеет стандартный вид. Например:

```javascript
import Api from './components/Api';
```

При использовании Webpack писать расширение JS файлам необязательно.

### Импорт JS библиотек установленных из NPM

Для импорта JS библиотек установленных из NPM, используется запись вида:

```javascript
import * as $ from 'jquery';
```

### Импорт JSON файлов

Для импорта JSON файлов Webpack не требуется дополнительных модулей. Запись импорта имеет тот же вид, что и импорт JS файлов. Например:

```javascript
import json from './assets/json';
```

Как и в случае с JS файлами, указывать расширение файла необязательно.

### Импорт CSS\Less\Sass\Scss файлов

Для импорта корневого CSS\Less\Sass\Scss файла в корневой JS файл используется запись вида:

```javascript
import './pages/index.css';
```

### Импорт CSS библиотек установленных из NPM

Для импорта CSS библиотек установленных из NPM, в CSS файле используется запись вида:

```css
@import "~normolize.css";
```

### Импорт XML файлов

Для импорта XML файлов используется запись вида:

```javascript
import xml from './assets/data.xml'
```

### Импорт CSV файлов

Для импорта CSV файлов используется запись вида:

```javascript
import csv from './assets/data.csv'
```

## Заметки о сборке

### Приватный режим

Поскольку данный пакет не планируется к публикации, из файла ```package.json``` была удалена строка ```"main": "index.js"```, а в место неё добавлена строка ```"private": true```.

### Обработка CSS файлов

Обработка CSS файлов с помощью загрузчиков в файле конфигурации происходит справа-налево, Webpack читает модули именно в таком порядке.
