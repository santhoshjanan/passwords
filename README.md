[![Docker Publish](https://github.com/santhoshjanan/passwords/actions/workflows/docker-image.yml/badge.svg)](https://github.com/santhoshjanan/passwords/actions/workflows/docker-image.yml) [![Node.js CI](https://github.com/santhoshjanan/passwords/actions/workflows/node.js.yml/badge.svg)](https://github.com/santhoshjanan/passwords/actions/workflows/node.js.yml)

#Looking for easy-to-remember strong passwords?

This is a simple and straight-forward application which will create easy to remember passwords.

It follows a simple set of rules to ensure it complies with "somewhat" strong password.

1. Three words, three letters long
2. Seperated with periods
3. Ends with a minus, special character and a two digit number.

Example: Six.one.toy-%74, Way.lie.egg-/53, etc...


PS: This application will not store any data as such.

## Docker

You can run this application on your own server by using the docker image: `docker pull moriartee/passwords:latest`
