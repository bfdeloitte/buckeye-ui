# BuckeyeUI

An Ohioan library of web components.

- Works with all frameworks 🧩
- Works with CDNs 🚛
- Fully customizable with CSS 🎨
- Includes an official dark theme 🌛
- Built with accessibility in mind ♿️

---

Documentation: [buckeyeui.com](https://buckeyeui.com)

Source: [github.com/bfdeloitte/iop-ui](https://github.com/bfdeloitte/iop-ui)

---

## Buckeyes 🥾

Buckeyes, or "Buckeye developers," can use this documentation to learn how to build BuckeyeUI from source. You will need Node >= 14.17 to build and run the project locally.

**You don't need to do any of this to use BuckeyeUI!** This page is for people who want to contribute to the project, tinker with the source, or create a custom build of BuckeyeUI.

If that's not what you're trying to do, the [documentation website](https://buckeyeui.com) is where you want to be.

### What are you using to build BuckeyeUI?

Components are built with [LitElement](https://lit-element.polymer-project.org/), a custom elements base class that provides an intuitive API and reactive data binding. The build is a custom script with bundling powered by [esbuild](https://esbuild.github.io/).

### Forking the Repo

Start by [forking the repo](https://github.com/bfdeloitte/iop-ui/fork) on GitHub, then clone it locally and install dependencies.

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/iop-ui
cd iop-ui
npm install
```

### Developing

Once you've cloned the repo, run the following command.

```bash
npm start
```

This will spin up the BuckeyeUI dev server. After the initial build, a browser will open automatically. There is currently no hot module reloading (HMR), as browser's don't provide a way to reregister custom elements, but most changes to the source will reload the browser automatically.

The documentation is powered by Docsify, which uses raw markdown files to generate pages. As such, no static files are built for the docs.

### Building

To generate a production build, run the following command.

```bash
npm run build
```

### Creating New Components

To scaffold a new component, run the following command, replacing `iop-tag-name` with the desired tag name.

```bash
npm run create iop-tag-name
```

This will generate a source file, a stylesheet, and a docs page for you. When you start the dev server, you'll find the new component in the "Components" section of the sidebar.

### Contributing

BuckeyeUI is an open source project! If you're interesting in contributing, please review the [contribution guidelines](CONTRIBUTING.md) first.

## License

BuckeyeUI is maintained by Brandon Fearing, forked from Shoelace by [Cory LaViska](https://twitter.com/claviska). It’s available under the terms of the MIT license.

- [Star on GitHub](https://github.com/bfdeloitte/iop-ui/stargazers)
