
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

#### Update `WHY SFU`

1. Make change to `contents/whysfu.yaml`

2. Commit the change directly to the `master` branch

### Local testing

This website is developed using [Vue 2](https://v2.vuejs.org/).

For local testing you will need to have [nodejs](https://nodejs.org).  

Use [nvm](https://github.com/nvm-sh/nvm) to select a version of node to use.  The build has been tested with node v14 to v18.  

To download and install node.js v18.20.4:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install v18.20.4
```

Build `src/assets/data.json` from yaml files (not sure why yaml files are not used directly).  You will need to have [python3](https://www.python.org/downloads/) installed.
```
pip3 install pyyaml                         # Install dependencies
python3 src/assets/parse_content.py         # Parse content
```

Run local server (may need to switch package.json "webpack-dev-server": "^2.11.2")
```
npm install              # install node modules            
npm start                # Start server
```

Go to http://localhost:8080

### Tech support

Contact Patrick at me@haoxp.xyz

### Updating the Github token

Looks like once in a while the Github gods require us to generate a new token. The basic procedure involves two steps.

1. [Generate a new github token](https://github.com/settings/tokens)
2. [Update it on Travis](https://travis-ci.org/github/sfu-cl-lab/ML-SFU/settings) by setting the `GITHUB_TOKEN` environment variable to contain the new token.
