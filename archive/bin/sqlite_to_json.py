#!/usr/bin/env python

# -*- coding:utf-8 -*-

import codecs
import json
import sqlite3
 
JSON_FILE = "tubaluba-calendar.json"
DB_FILE = "tubaluba-calendar.sqlite"
 
# gigs = json.load(open(JSON_FILE))
conn = sqlite3.connect(DB_FILE)
conn.row_factory = sqlite3.Row
c = conn.cursor()
gigs = []
for row in c.execute("SELECT g.* \
        FROM gigs g \
            JOIN venues v ON g.venue = v.id \
        WHERE g.date >= DATE('now','-2 day')\
        ORDER BY g.date, g.time \
        ").fetchall():
    gig = dict(zip(row.keys(), row));
    venue_row = c.execute("select v.* from venues v WHERE v.id = ?", [gig.get('venue')]).fetchone()
    venue = dict(zip(venue_row.keys(), venue_row));
    gig['venue'] = venue
    gigs.append(gig)

c.close()
with codecs.open(JSON_FILE, 'w', encoding='utf-8') as fp:
    json.dump(gigs, fp, ensure_ascii=False, encoding="utf-8")

print "wrote %s" % JSON_FILE
