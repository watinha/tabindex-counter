#!/bin/sh

WEBSITES=`cat $1`

for WEBSITE in $WEBSITES; do
    casperjs main.js $WEBSITE --output=csv | grep -v "Checking URL" | grep -v "Page Title" | grep -v "Done." >> $2
done
