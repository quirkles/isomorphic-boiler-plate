#!/usr/bin/env bash

cd `dirname $0`

ln -f ./git-hooks/pre-commit.sh ../.git/hooks/pre-commit

chmod +x .git/hooks/pre-commit