var env = require('dotenv').config();


exports.twitter = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  id: "f6b4b9428f2745c99930017a7fbc8354",
  secret: "c4ad0a6eb56846ba80a04e999ecebdea"
};

exports.omdb = {
  api_key: process.env.OMDB_API_KEY
};




