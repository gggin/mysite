#!/bin/bash

HOSTNAME="123.57.81.203"
PORT="3306"
USERNAME="root"
PASSWORD="q"

DATABASE="test"
FILENAME="test.sql"


#安装mysql
sudo apt-get install mysql-server mysql-client

sed -n 's/bind-address            = 127.0.0.1/bind-address            = 0.0.0.0/p' /etc/mysql/my.cnf


#创建表结构并插入一条数据
mysql -h${HOSTNAME}  -P${PORT}  -u${USERNAME} -p${PASSWORD} -D${DATABASE} < ${FILENAME} 

service mysql stop
service mysql start
