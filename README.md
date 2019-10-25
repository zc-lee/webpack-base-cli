# @lpg/base-cli

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]

[npm-image]:https://img.shields.io/npm/v/@lpg/base-cli.svg?style=flat-square
[download-image]:https://img.shields.io/npm/dm/@lpg/base-cli.svg?style=flat-square
[npm-url]:https://www.npmjs.com/package/@lpg/base-cli

## Install
```javascript
npm -g @lpg/base-cli
```

## Development
```javascript
init: lvue init
create: lvue create --[name]
serve: lvue serve --[name]
build: lvue build --[name]
```

### 1.目录结构   
```javascript
vue-multi-pages-cli
├── build
│   ├── [name]
│   │   ├── static
│   │   │   ├── assets
│   │   │   ├── js
│   │   │   └── css
│   │   ├── index.html
│   │   └── index.js
│   ├── ...
│   └── pages
├─ src
│   ├── components
│   └── pages
│       ├── [name]
│       │   ├── demos
│       │   ├── js
│       │   ├── css
│       │   ├── index.html
│       │   └── index.js
│       ├── ...
│       └── pages
├─ package.json
├─ .gitignore
├─ demo.md
└─ README.md
```

### versions
***
**1.0.0**
