#!/bin/bash

# Setup Travis git user
git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

# Go to `dist` folder
cd ./src/.vuepress/dist/

# Commit `dist` files
git init
git add -A
git commit -m "Deploy $TRAVIS_COMMIT"

# Push to GitHub
git push -f https://${GITHUB_TOKEN}@github.com/VueFloripa/vuefloripa.github.io.git master