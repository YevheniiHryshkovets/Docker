#!/usr/bin/env bash
result=60;
while [ $result != 0 ]; do
sleep 1s
 if (curl -X GET http://geography-db:27017 | grep MongoDB);
   then	result=0 &&
   echo "MongoDB is started"
   else
        result=$((result-1))
 fi
done
node app.js