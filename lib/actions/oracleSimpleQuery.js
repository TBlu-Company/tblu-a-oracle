'use strict';

const executeQuery = require('../oracle/executeQuery.js')

module.exports = (data) => new Promise((resolve, reject) => {
  try {
    executeQuery(data.parameters.dataBase, data.parameters.query, data.parameters.queryParameters).then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err);
    });
  } catch (e) {
    reject(e);
  };
});
