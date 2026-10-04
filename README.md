
# ML-SFU
[![update-gh-pages](https://github.com/sfu-cl-lab/ML-SFU/actions/workflows/update-gh-pages.yml/badge.svg)](https://github.com/sfu-cl-lab/ML-SFU/actions/workflows/update-gh-pages.yml)

### Update instructions

Just edit files in `contents/` and then commit the change, it will **automatically** deploy in 5 mins. 

#### Add seminar talk

1. Add an item at `contents/seminars/seminar.yaml`

2. Commit the change directly to the `master` branch

#### Add publication

1. Add an item at `contents/research/pubs.yaml`

2. Add image for publication (optional)
   1. Add image under `contents/research/<year>/<venue>` to keep images organized
   2. Image path would then be of the form `<year>/<venue>/<imageName>`

3. Commit the change directly to the `master` branch

#### Add news item

1. Add an item at `contents/research/news.yaml` 
   1. Add image under `contents/research/<year>` to keep images organized
   2. Add information about the news item (e.g. `description`, `image`, and `url`) as appropriate
   3. Specify `type: conference` for conference news (this will include publications for that conference)

2. If conference news, update publication items (see above) and add entry for `workshops` (if there are workshops we are organizing / participating in) 

3. Commit the change directly to the `master` branch

#### Update the carousel

1. Upload the images to `contents/carousel`

2. Commit the change directly to the `master` branch

#### Add/remove a professor/lab

1. Upload the image to `contents/people`

2. Add an item at `contents/people/people.yaml`

3. Commit the change directly to the `master` branch

#### Add/remove a lab

1. Upload the lab's image to `contents/lab`

2. Add an item at `contents/lab/lab.yaml`
   1. Photos are cropped to fill the card. For a logo, add `logo: true` so it is shown whole instead, and `logoBackground` to fill the space beside it: the logo's background colour (`"#rrggbb"`), or a gradient such as `"linear-gradient(#454e56, #2e353b)"` if its background is shaded

3. Commit the change directly to the `master` branch

#### Update `WHY SFU`

1. Make change to `contents/whysfu.yaml`

2. Commit the change directly to the `master` branch

### Local testing

This website is developed using [Vue 2](https://v2.vuejs.org/).

For local testing you will need to have [nodejs](https://nodejs.org).  

Use [nvm](https://github.com/nvm-sh/nvm) to select a version of node to use.  The site is built and deployed with node v24 (see `.github/workflows/update-gh-pages.yml`); v18 has also been tested locally.  

To download and install node.js v24:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install 24
```

Build `src/assets/data.json` from yaml files (not sure why yaml files are not used directly).  You will need to have [python3](https://www.python.org/downloads/) installed.
```
pip3 install pyyaml                         # Install dependencies
python3 src/assets/parse_content.py         # Parse content
```

Run local server
```
npm install -g yarn              # once, if you don't have yarn
yarn install --ignore-scripts    # install node modules (as the deploy build does; plain `npm install` fails on Apple Silicon Macs)
npm start                        # Start server
```

Every push builds the site on GitHub (Actions tab), so you can push a branch to check it builds; only `master` is deployed.

Go to http://localhost:8080

### Tech support

Contact Patrick at me@haoxp.xyz

### Updating the Github token

Looks like once in a while the Github gods require us to generate a new token. The basic procedure involves two steps.

1. [Generate a new github token](https://github.com/settings/tokens)
2. [Update it on Travis](https://travis-ci.org/github/sfu-cl-lab/ML-SFU/settings) by setting the `GITHUB_TOKEN` environment variable to contain the new token.
