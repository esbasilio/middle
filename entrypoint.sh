#!/bin/bash

# start cron service
echo "CRON: start service"
service cron start

# go through the same process as Apache to match all requirements.
echo "APACHE: Starting webserver"
/usr/local/bin/apache2-foreground