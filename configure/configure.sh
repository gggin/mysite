#!/bin/bash
SOURCEPATH="https://github.com/joyent/node.git"

#安装python git等工具
sudo apt-get install git-core curl build-essential openssl libssl-dev python-pip python-dev

#安装nodejs
git clone ${SOURCEPATH}
cd node
git tag # 这个命令将会显示Node的所有版本的列表
git checkout v0.10.33
./configure
make
sudo make install
#安装NPM

wget https://npmjs.org/install.sh --no-check-certificate
chmod 777 install.sh
./install.sh

#安装mysql
sudo apt-get install mysql-server mysql-client

