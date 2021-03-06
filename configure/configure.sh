#!/bin/bash
sudo apt-get update
#安装python git nodejs npm等工具
sudo apt-get install git-core curl build-essential openssl libssl-dev python-pip python-dev mysql-server mysql-client

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install nodejs

USERNAME="root"
PASSWORD="123456"
FILENAME="ss.sql"

mysql -u${USERNAME} -p${PASSWORD} < ${FILENAME}

sudo service mysql stop
sudo service mysql start

git clone -b manyuser https://github.com/gggin/shadowsocks.git
cd shadowsocks
cd shadowsocks
sudo nohup python server.py &