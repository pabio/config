# Koj config files

This repository contains the common configuration files for Koj projects.

## 💻 Usage

Install the package as a dev dependency from [npm](https://www.npmjs.com/package/@koj/config):

```bash
npm install --save-dev @koj/config
```

### Prettier

Create a Prettier config file `.prettierrc.cjs` in the project room:

```js
module.exports = require("@koj/config").prettier;
```

### Semantic Release

Create a Semantic Release config file `release.config.js` in the project room:

```js
module.exports = require("@koj/config").release;
```

When you want to release:

```bash
npx semantic-release
```

## 📄 License

- Code: [MIT](./LICENSE) © [Koj](https://koj.co)

<p align="center">
  <a href="https://koj.co">
    <img width="44" alt="Koj" src="https://kojcdn.com/v1598284251/website-v2/koj-github-footer_m089ze.svg">
  </a>
</p>
<p align="center">
  <sub>An open source project by <a href="https://koj.co">Koj</a>. <br> <a href="https://koj.co">Furnish your home in style, for as low as CHF175/month →</a></sub>
</p>
