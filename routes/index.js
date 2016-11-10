var express = require('express');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res/*, next*/) {
  let username;
  try {
    username = url.parse(req.url, true).query['username'];
    if (username) {
      username = username.replace(/^(http(s)?:)?(\/\/)?(www\.)?[-a-zA-Z0-9:%._\+~#=]{2,256}\.[a-z]{2,6}\//i, '');
      username = username.replace(/\?.*$/i, '');
      username = '@' + username;
    } else {
      username = 'Invalid username';
    }
  } catch (e) {
    username = 'Invalid username';
  }
  res.render('index', { result:  username});
});

module.exports = router;
