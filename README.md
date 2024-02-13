
# ML-SFU
[![update-gh-pages](https://github.com/sfu-cl-lab/ML-SFU/actions/workflows/update-gh-pages.yml/badge.svg)](https://github.com/sfu-cl-lab/ML-SFU/actions/workflows/update-gh-pages.yml)

### Update instructions

Just edit files in `contents/` and then commit the change, it will **automatically** deploy in 5 mins. 

#### Update the carousel

1. Upload the images to `contents/carousel`

2. Commit the change directly to the `master` branch

#### Add/remove a professor/lab

1. Upload the image to `contents/people`

2. Add an item at `contents/people/people.yaml`

3.  Commit the change directly to the `master` branch

#### Update `WHY SFU`

1. Make change to `contents/whysfu.yaml`

2. Commit the change directly to the `master` branch

### Tech support

Contact Patrick at me@haoxp.xyz

### Updating the Github token

Looks like once in a while the Github gods require us to generate a new token. The basic procedure involves two steps.

1. [Generate a new github token](https://github.com/settings/tokens)
2. [Update it on Travis](https://travis-ci.org/github/sfu-cl-lab/ML-SFU/settings) by setting the `GITHUB_TOKEN` environment variable to contain the new token.
