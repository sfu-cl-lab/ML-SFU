from os import listdir
from os.path import isfile, join
import json
import yaml

CONTENT_PATH = 'contents'


def parse_carousel():
    carousel_path = '{}/carousel'.format(CONTENT_PATH)
    pic_list = [f for f in listdir(
        carousel_path) if isfile(join(carousel_path, f))]
    return [{"picPath": f} for f in pic_list]


def parse_lab():
    return yaml.load(open('{}/lab/lab.yaml'.format(CONTENT_PATH)))


def parse_people():
    return yaml.load(open('{}/people/people.yaml'.format(CONTENT_PATH)))


def parse_whysfu():
    return yaml.load(open('{}/whysfu.yaml'.format(CONTENT_PATH)))


def parse_all()->None:
    rv = {}
    rv['carousel'] = parse_carousel()
    rv['labs'] = parse_lab()
    rv['people'] = parse_people()
    rv['whysfu'] = parse_whysfu()
    json.dump(rv, open('src/assets/data.json', 'w'))


if __name__ == '__main__':
    parse_all()