#!/bin/bash
sudo apt-get update
#安装python git nodejs npm等工具
sudo apt-get install git-core curl build-essential openssl libssl-dev python-pip python-dev mysql-server mysql-client nodejs npm

USERNAME="root"
PASSWORD="123456"
FILENAME="ss.sql"

mysql -u${USERNAME} -p${PASSWORD} < ${FILENAME}

sudo service mysql stop
sudo service mysql start