#!/bin/bash

DIR=~/code/zachsnoek.com

echo "Updating API with most recent changes..."

cd $DIR

echo "Getting changes..."
git pull

echo "Installing dependencies..."
cd server
npm i

echo "Restarting app..."
pm2 restart server