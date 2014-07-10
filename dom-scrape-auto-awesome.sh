#!/bin/bash
if [ $1x = x ] || [ $1x = "x --usage" ] || [ $1x = "x --help" ] || [ $2x = "x" ]; then
  echo ""
  echo "Usage: $0 <turntable channel name> <full path to cookies.txt>"
  echo "ie: dom_scrape-auto-awesome 80s_hits /home/tmp/cookies.txt"
  echo ""
  exit 1
else
  echo "Scraping..."
  wget -4 -O OUTPUT --user-agent='Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.17) Gecko/20110422 Ubuntu/10.04 (lucid) Firefox/3.6.17' --load-cookies=$2 -r -q http://turntable.fm/$1

  id=`grep -o block\;cursor\:pointer\;\}#.*\{background\:url\(\'https\:\/\/s3\.amazonaws\.com\/static\.turntable\.fm\/roommanager_assets\/props\/vote_btns\.png OUTPUT | awk -F '#' '{print $2}' | awk -F '{' '{print $1}'`

  echo "Retrieved!"
  echo "The Awesome button domId for your session is: $id"
fi
