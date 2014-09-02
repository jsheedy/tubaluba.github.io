#!/usr/bin/env python

# -*- coding:utf-8 -*-
import json
import sqlite3
 
JSON_FILE = "tubaluba-calendar.json.orig"
DB_FILE = "tubaluba-calendar.sqlite"
 
gigs = json.load(open(JSON_FILE))
conn = sqlite3.connect(DB_FILE)
c = conn.cursor()
c.execute('drop table if exists venues')
c.execute('drop table if exists gigs')
c.execute('create table venues  (id INTEGER PRIMARY KEY, name TEXT, url TEXT, address TEXT)')
c.execute('create table gigs (\
    id INTEGER PRIMARY KEY, \
    date TEXT,\
    time TEXT,\
    venue INTEGER,\
    description TEXT,\
    tickets TEXT,\
    poster TEXT,\
    facebook TEXT,\
    FOREIGN KEY(venue) references venue(id))')
 
for gig in gigs:
    data = [
        gig['venue'].get('name'),
        gig['venue'].get('url'),
        gig['venue'].get('address'),
    ]
    rv = c.execute('insert into venues (name, url, address) values (?,?,?)', data)
    data = [
        gig.get('date'),
        gig.get('time'),
        rv.lastrowid,
        gig.get('description'),
        gig.get('tickets'),
        gig.get('poster'),
        gig.get('facebook')
    ]
    c.execute('insert into gigs (date, time, venue, description, tickets, poster, facebook) \
        values (?,?,?,?,?,?,?)', data)


conn.commit()
c.close()
print "wrote %s to %s" % (JSON_FILE, DB_FILE)
