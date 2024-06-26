
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

3. Commit the change directly to the `master` branch

#### Add seminar talk

1. Add an item at `contents/seminars/seminar.yaml`

2. Commit the change directly to the `master` branch

#### Add news item

1. Add an item at `contents/research/news.yaml` 
   1. Add image under `contents/research/<year>` to keep images organized
   2. Add information about the news item (e.g. `description`, `image`, and `url`) as appropriate

2. If publications news, add items at `contents/research/pubs.yaml` 
   1. Add image under `contents/research/<year>/<venue>` to keep images organized
   2. Image path would then be of the form `<year>/<venue>/<imageName>`

3. Commit the change directly to the `master` branch

#### Update `WHY SFU`

1. Make change to `contents/whysfu.yaml`

2. Commit the change directly to the `master` branch

### Local testing

Build `src/assets/data.json` from yaml files (not sure why yaml files are not used directly)
```
pip3 install pyyaml
python3 src/assets/parse_content.py
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
