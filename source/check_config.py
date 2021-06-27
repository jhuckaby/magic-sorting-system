#!/usr/bin/python3

import json
import logging
from argparse import ArgumentParser

logger = logging.getLogger()

# Makes sure that all the items in ref_data are in chk_data
def check_items(ref_data, chk_data):
    # Gather up list of all items
    ref_items = []
    for group in ref_data['groups']:
        for item in group['items']:
            ref_items.append(item)

    chk_items = []
    for group in chk_data['groups']:
        for item in group['items']:
            if item not in ref_items:
                logger.warn("{item} in checked config but not in reference config".format(item=item))
            chk_items.append(item)

    for item in ref_items:
        if item not in chk_items:
            logger.warn("{item} in reference config but not in checked config".format(item=item))

def main():
    parser = ArgumentParser()

    parser.add_argument("ref_file", help="Reference config filename")
    parser.add_argument("chk_file", help="Checked config filename")

    args = parser.parse_args()
    
    logging.basicConfig(level=logging.DEBUG, format="%(message)s")

    with open(args.ref_file, "r") as ref_file:
        ref_data = json.load(ref_file)

    with open(args.chk_file, "r") as chk_file:
        chk_data = json.load(chk_file)

    check_items(ref_data, chk_data)

if __name__ == "__main__":
    main()
