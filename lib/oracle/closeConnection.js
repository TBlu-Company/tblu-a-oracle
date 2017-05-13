'use strict';
const oracledb = require('oracledb');

module.exports = (connection) => new Promise((resolve, reject) => {
  try {
    connection.close(
      function(err) {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
  } catch (e) {
    reject(e);
  };
});
