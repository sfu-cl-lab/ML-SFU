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
    return yaml.safe_load(open('{}/lab/lab.yaml'.format(CONTENT_PATH)))


def parse_people():
    return yaml.safe_load(open('{}/people/people.yaml'.format(CONTENT_PATH)))


def parse_seminars():
    return yaml.safe_load(open('{}/seminars/seminars.yaml'.format(CONTENT_PATH)))


def parse_general():
    return yaml.safe_load(open('{}/general.yaml'.format(CONTENT_PATH)))


def parse_all()->None:
    rv = {}
    rv['carousel'] = parse_carousel()
    rv['labs'] = parse_lab()
    people = parse_people()
    rv['people'] = [p for p in people if p.get("status") != "affiliated"]
    rv['affiliated'] = [p for p in people if p.get("status") == "affiliated"]
    rv['seminars'] = parse_seminars()
    rv['general'] = parse_general()
    json.dump(rv, open('src/assets/data.json', 'w'))


if __name__ == '__main__':
    parse_all()
