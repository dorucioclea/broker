#!/usr/bin/env bash
cd /srv/broker
mkdir /srv/broker/.npm-global
NPM_CONFIG_PREFIX=/srv/broker/.npm-global npm install --unsafe-perm