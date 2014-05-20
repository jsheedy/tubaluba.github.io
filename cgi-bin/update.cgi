#!/bin/bash

echo "Content-type: text/plain"
echo

token=`expr "$QUERY_STRING" : 'token=\([a-zA-Z0-9]*\)'`
hash=`echo $token | sha512sum ` 

if [ "$hash" == "3f2a05668aa293939de3f635e8fde247aa470cc9ebb3e505d793acd01283095d9d7e3ebbf0f5d548a8adff22f6beebf76789119ee4ce6d49bfbea3bd4ce60009  -" ] || \
   [ "$hash" == "7485fbbd81292d21e43b199c06296de2ec4acb1a29d979464db95fbdf5a4e63c28f9e177d9a4e6d782707326940c8f8da5d7c7a359911b78a98ada7cec211a40  -" ]; then 
 
    cd $HOME/tubalubaband.com
    echo `git pull`
    echo "tubalubaband.com was updated" | sendmail joseph.sheedy@gmail.com

else
    echo "invalid token"
fi
