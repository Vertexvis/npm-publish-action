#! /bin/bash

npm_path=$1
registry_url=$2
token=$3

$npm_path config set "//$registry_url/:_authToken=$token"
