// require necessary NPM packages
const express = require('express')
const session = require('express-session')
const passport = require('passport')
const SpotifyStrategy = require('passport=-spotify').Strategy 
const dotenv = require('dotenv')
const queryString = require('node:querystring')
const axios = require('axois')

dotenv.config()

// define server and client ports
const serverDevPort = 8000
const clientDevPort = 3000

