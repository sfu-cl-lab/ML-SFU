from os import listdir
from os.path import isfile, join
import re
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


def parse_news():
    return yaml.safe_load(open('{}/research/news.yaml'.format(CONTENT_PATH)))


def parse_people():
    return yaml.safe_load(open('{}/people/people.yaml'.format(CONTENT_PATH)))


def parse_pubs():
    return yaml.safe_load(open('{}/research/pubs.yaml'.format(CONTENT_PATH)))


def parse_seminars():
    seminars = yaml.safe_load(open('{}/seminars/seminars.yaml'.format(CONTENT_PATH)))
    for sem in seminars:
        speaker = re.sub(r"\([^)]*\)", "", sem["speaker"].lower())
        speaker = speaker.replace(' ', '_')
        date = re.sub("-", "", sem["date"])
        sem["key"] = date + '-' + speaker
    return seminars


def parse_seminar_info():
    return yaml.safe_load(open('{}/seminars/seminar_info.yaml'.format(CONTENT_PATH)))


def parse_general():
    return yaml.safe_load(open('{}/general.yaml'.format(CONTENT_PATH)))


def parse_all()->None:
    rv = {}
    rv['carousel'] = parse_carousel()
    rv['labs'] = parse_lab()
    people = parse_people()
    rv['people'] = [p for p in people if p.get("status") != "affiliated"]
    rv['affiliated'] = [p for p in people if p.get("status") == "affiliated"]
    rv['pubs'] = parse_pubs()
    rv['news'] = parse_news()
    rv['seminars'] = parse_seminars()
    rv['seminar_info'] = parse_seminar_info()
    rv['general'] = parse_general()
    json.dump(rv, open('src/assets/data.json', 'w'))


if __name__ == '__main__':
    parse_all()
