'use strict';
const oracledb = require('oracledb');
const _ = require('lodash');

const pullDefault = {
  // user: configDataBase.user,
  // password: configDataBase.password,
  // connectString: configDataBase.connectString,
  // Default values shown below
  // externalAuth: false, // whether connections should be established using External Authentication
  // poolMax: 4, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
  // poolMin: 0, // start with no connections; let the pool shrink completely
  // poolIncrement: 1, // only grow the pool by one connection at a time
  // poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
  // poolPingInterval: 60, // check aliveness of connection if in the pool for 60 seconds
  // queueRequests: true, // let Node.js queue new getConnection() requests if all pool connections are in use
  // queueTimeout: 60000, // terminate getConnection() calls in the queue longer than 60000 milliseconds
  // poolAlias: 'pool2' // could set an alias to allow access to the pool via a name
  // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
};
const createPool = (pool) => new Promise((resolve, reject) => {
  pool['poolAlias'] = pool.uuid;
  oracledb.createPool(pool, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    };
  });
});
const getConnection = (pool) => new Promise((resolve, reject) => {
  try {
    let merge = _.merge(pullDefault, pool);
    oracledb.getConnection(merge.uuid).then((connection) => {
      resolve(connection);
    }).catch((err) => {
      if (err.message.includes('NJS-047')) {
        createPool(pool).then(() => {
          getConnection(pool).then((connection) => {
            resolve(connection);
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      } else {
        reject(err);
      };
    });
  } catch (e) {
    reject(e);
  };
});

module.exports = getConnection;
