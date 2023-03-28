#!/bin/bash

# Install husky hooks
npx husky install

# Setup git config
git config pull.rebase true
git config alias.cz '!npx git-cz'