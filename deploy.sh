#!/bin/bash

ssh root@hvps <<EOSSH
cd /var/www/blog-api

git checkout -- .
git pull origin master

cat <<EOF > docker-compose.override.yml
version: '3'
services:
  app:
    command: './start.sh'
    expose:
      - '5004'
    ports:
      - 5004:80
EOF

docker-compose down
docker-compose up -d
EOSSH