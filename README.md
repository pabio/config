# 🛠️ Koj config files

This repository contains the common configuration files for Koj projects.

## 💻 Usage

Install the package as a dev dependency from [npm](https://www.npmjs.com/package/@koj/config):

```bash
npm install --save-dev @koj/config
```

### Prettier

Our Prettier configuration keeps all defaults with the exception of print width, which is set at 100 characters rather than 80. To use this configuration, create a Prettier config file `.prettierrc.cjs` in the project root:

```js
module.exports = require("@koj/config").prettier;
```

### Semantic Release

We use [Semantic Release](https://github.com/semantic-release/semantic-release) for automated deployments of our packages. Our configuration adds support for [Gitmoji](https://gitmoji.carloscuesta.me) commits, creating release notes with a `CHANGELOG.md`, and publishing to GitHub and npm.

Create a Semantic Release config file `release.config.js` in the project room. If you want to release the `master` or `production` branches, you can use the import directly:

```js
module.exports = require("@koj/config").master;
```

Alternately, you can specify the branch you want to release:

```js
module.exports = require("@koj/config").release("branch-name");
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
