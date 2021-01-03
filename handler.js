'use strict';

const axios = require('axios')
const cheerio = require('cheerio')

module.exports.randomCommit = async event => {
  const { data } = await axios.get('http://whatthecommit.com/')
  const $ = cheerio.load(data)
  const [commitMessage] = await $('#content').text().trim().split('\n')

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: commitMessage
      }
    ),
  };
};
