USERNAME="root"
PASSWORD="123456"
FILENAME="ss.sql"

mysql -u${USERNAME} -p${PASSWORD} < ${FILENAME}

sudo service mysql stop
sudo service mysql start