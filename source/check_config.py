#!/usr/bin/python3

import sys
import json
import logging
from argparse import ArgumentParser

logger = logging.getLogger()

def gather_config_items(config_data):
    config_items = []
    for group in config_data['groups']:
        for item in group['items']:
            config_items.append(item)
    return config_items

# Makes sure that all the items in ref_data are in chk_data
def compare_config_items(ref_data, chk_data):
    # Gather up list of all items
    ref_items = gather_config_items(ref_data)
    chk_items = gather_config_items(chk_data)

    for item in chk_items:
        if item not in ref_items:
            logger.warn("{item} in checked config but not in reference config".format(item=item))

    for item in ref_items:
        if item not in chk_items:
            logger.warn("{item} in reference config but not in checked config".format(item=item))

def compare_names_list(names_list, chk_data, list_missing=False):
    chk_items = gather_config_items(chk_data)

    for item in chk_items:
        if item not in names_list:
            logger.warn("{item} present in config but not in block names list".format(item=item))

    for item in names_list:
        if item not in chk_items:
            logger.warn("{item} present in block names file but not config".format(item=item))

            if list_missing:
                print('"%s",' % item)

def main():
    parser = ArgumentParser()

    parser.add_argument("check_config_file", help="Checked config filename")
    parser.add_argument("block_names_file", help="List of block names")
    parser.add_argument("-m", "--list_missing", action="store_true", help="List missing items from config")
    parser.add_argument("-r", "--reference_config_file", help="Reference config filename")

    args = parser.parse_args()
    
    logging.basicConfig(level=logging.DEBUG, format="%(message)s", stream=sys.stderr)

    with open(args.check_config_file, "r") as chk_file:
        chk_data = json.load(chk_file)

    with open(args.block_names_file, "r") as names_file:
        names_list = [ l.strip() for l in names_file.readlines() ]

    compare_names_list(names_list, chk_data, list_missing=args.list_missing)

    if args.reference_config_file is not None:
        with open(args.ref_file, "r") as ref_file:
            ref_data = json.load(ref_file)

        compare_config_items(ref_data, chk_data)

if __name__ == "__main__":
    main()
