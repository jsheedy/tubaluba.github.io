#!/bin/bash

python -c 'import json;y=[x.get("id") for x in json.load(open("tubaluba-calendar.json"))];print sorted(y)'
