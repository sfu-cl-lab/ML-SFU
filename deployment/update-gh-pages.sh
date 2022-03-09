#!/bin/bash

repoURI="https://x-access-token:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
remoteName="origin"
mainBranch="master"
targetBranch="gh-pages"
buildDirectory="dist"

cd "$GITHUB_WORKSPACE"

# Commit and push the changes to GitHub Pages.
git config user.name "$GitHub Actions"
git config user.email "github.actions@bots.github.com"

git checkout "$targetBranch"

echo ml.cs.sfu.ca > CNAME
rm -r static/
mv dist/* .
git add *

git commit -m "Updated GitHub Pages."
if [ $? -ne 0 ]
then
  echo "Nothing to commit!"
  exit 0
fi

git remote set-url "$remoteName" "$repoURI"
git push --force-with-lease "$remoteName" "$targetBranch"
