from os import listdir
from os.path import isfile, join
from typing import List
CONTENT_PATH = '../../contents'


def parse_carousel()->List[dict]:
    carousel_path = f'{CONTENT_PATH}/carousel'
    pic_list = [f for f in listdir(carousel_path) if isfile(join(carousel, f))]
    return [{"picPath": f} for f in pic_list]


if __name__ == '__main__':
    rv=parse_carousel()
