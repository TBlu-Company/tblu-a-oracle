'use strict';

const pool = {
  user: 'oracle_ocm',
  password: 'paulo',
  connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST = 192.168.40.147)(PORT = 1521))(CONNECT_DATA=(SERVER = DEDICATED)(SERVICE_NAME = UPGR)))',
  poolAlias: 'pool2'
};

const executeQuery = require('../oracle/executeQuery.js')

module.exports = (data) => new Promise((resolve, reject) => {
  try {
    executeQuery(pool, "SELECT * FROM TABLE1").then(result => {
      resolve(result);
    });
  } catch (e) {
    reject(e);
  };
});
