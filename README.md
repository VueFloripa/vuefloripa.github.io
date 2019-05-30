# [VueFloripa website](https://floripa.vue.community/)

Made with [VuePress](https://github.com/vuejs/vuepress/) for the [VueFloripa](https://www.meetup.com/vuefloripa/) Meetup group!

## Setup
```bash
npm install
```

### Running - Development
```bash
npm run dev
```

### Build - Production
```bash
npm run build
```

## Release
You can automatically release a new version using:
```bash
npm run release:major
# or
npm run release:minor
# or
npm run release:patch
```

After that you need to push to `development` to trigger a new deployment.

## Deployment - Production
Automatically triggered by Travis CI. It builds the app and pushes to master afterwards.