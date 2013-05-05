#!/bin/sh

WEBSITES=`cat $1`

for WEBSITE in $WEBSITES; do
    casperjs ../main.js $WEBSITE
done
