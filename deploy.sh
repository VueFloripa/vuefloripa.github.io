#!/bin/bash

# Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")

# Setup Travis git user
git config --global user.email "deploy@travis-ci.org"
git config --global user.name "Travis Deployment Bot"

# Go to `dist` folder
cd ./src/.vuepress/dist/

# Commit `dist` files
git init
git add -A
git commit -m ":rocket: $CURRENT_VERSION"

# Push to GitHub
git push -f https://${GITHUB_TOKEN}@github.com/VueFloripa/vuefloripa.github.io.git master