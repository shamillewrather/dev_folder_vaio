#!/bin/bash
# Line 1 is to tell shell that I am using the version bash

# Author: Shamille Wrather
# Version: 0.1
# This script will create a backup on a remote computer

# Sandra's IP address : 192.168.7.199

# Create variables

# Test how many arguments exist
# if [ $# -ne 1 ]
# then
#     echo "The amount of arguments isn't correct"
#     exit
# else
#     echo "OK, let's keep going!"
# fi


# ip=192.168.7.199
# myself="uservaio"
# folder="/home/$myself/dev"
# destination="/home/$myself"
# user="user12"

echo "Hello!"
echo "Let's backup!"
echo "On the IP address: $ip"
echo "in the $folder folder"
echo "in the $destination/$myself.tar archive"

#Variables 1, 2, 3, 4 etc are pre-existing variables
echo "Number of arguments: $#" # $# is a pre-existing variable
echo "1: $1"
echo "2: $2"
echo "3: $3"
echo "4: $4"

tar -cf $destination/$myself.tar $folder
code=$?
if [ $code -ne 0 ]
then   
    echo "The tar command failed... here is the error code $code too bad..."
    exit
fi

# scp $destination/$myself.tar $user@$ip:/home/$user/laclasse




