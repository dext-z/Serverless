'use strict';

module.exports.kms = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      secretValue: process.env.SECRET_VALUE
    })
  };

  callback(null, response);
};