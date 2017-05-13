'use strict';
const oracledb = require('oracledb');
const closeConnection = require('./closeConnection.js');
const getConnection = require('./getConnection.js');

const executeA = (connection, query) => new Promise((resolve, reject) => {
  connection.execute(query,
    function(err, result) {
      if (err) {
        reject(err);
      } else {
        let clone = result.rows;
        resolve(clone);
      };
    });
})
const executeB = (connection, query, paramters) => new Promise((resolve, reject) => {
  connection.execute(query, paramters,
    function(err, result) {
      if (err) {
        reject(err);
      } else {
        let clone = result.rows;
        resolve(clone);
      };
    });
})

module.exports = (pool, query, paramters) => new Promise((resolve, reject) => {
  try {
    let connection;
    getConnection(pool).then((conn) => {
      connection = conn;
      if (typeof paramters == 'undefined') {
        return executeA(connection, query)
      } else {
        return executeB(connection, query, paramters)
      }
    }).then((result) => {
      closeConnection(connection).then(() => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  } catch (e) {
    reject(e);
  };
});
