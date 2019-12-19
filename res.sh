#!/bin/bash


FILE=$1
CURR_DIR=$(pwd)
TRIES=3

if [ -e $CURR_DIR/$FILE ];
then
	echo -n Login:
	read -s login
	login_line=$(sudo head -n 1 $FILE)
	password_line=$(sudo tail -n 1 $FILE)
	if [ "$login" = "$login_line" ];
	then echo "Login correct"
	fi 
	echo -n Password:
	read -s password
	if [ "$password" = "$password_line" ];
	then echo "Password correct"
	fi
else
	echo -n Login:
	read -s login
	echo $login > $FILE
	echo -n Password:
	read -s password
	echo $password >> $FILE
	chmod -u-rw $FILE
fi
