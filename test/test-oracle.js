'use strict';
const Datastore = require('nedb');
const path = require('path');
const dirname = path.dirname(__filename);
const dBconfig = new Datastore(dirname + '/config.db');
dBconfig.loadDatabase();
const core = require('../index.js');



describe('oracleSimpleQuery', function() {
  it('get oracleSimpleQuery', function(done) {
    let data = {
      parameters: {
        dataBase: {
          user: 'oracle_ocm',
          password: 'paulo',
          connectString: '(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST = 192.168.40.147)(PORT = 1521))(CONNECT_DATA=(SERVER = DEDICATED)(SERVICE_NAME = UPGR)))',
          uuid: '2ae03895-01c5-4342-abfb-797f2ae425d7'
        },
        query: "SELECT * FROM TABLE1",
        queryParameters: {}
      }
    };
    data['moduleFunction'] = "oracleSimpleQuery";
    core.run(data).then(result => {
      console.log(result);
      done();
    }).catch(error => {
      done(error);
    });
  });
});

// 'use strict';
// const Datastore = require('nedb');
// const path = require('path');
// const dirname = path.dirname(__filename);
// const dBconfig = new Datastore(dirname + '/config.db');
// dBconfig.loadDatabase();
// const core = require('../index');
//
// const configDataBase = require('./configDataBase');
// const oracledb = require('oracledb');
//
//
// function init() {
//   oracledb.createPool({
//       user: configDataBase.user,
//       password: configDataBase.password,
//       connectString: configDataBase.connectString,
//       // Default values shown below
//       // externalAuth: false, // whether connections should be established using External Authentication
//       // poolMax: 4, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
//       // poolMin: 0, // start with no connections; let the pool shrink completely
//       // poolIncrement: 1, // only grow the pool by one connection at a time
//       // poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
//       // poolPingInterval: 60, // check aliveness of connection if in the pool for 60 seconds
//       // queueRequests: true, // let Node.js queue new getConnection() requests if all pool connections are in use
//       // queueTimeout: 60000, // terminate getConnection() calls in the queue longer than 60000 milliseconds
//       poolAlias: 'pool1' // could set an alias to allow access to the pool via a name
//       // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
//     },
//     function(err, pool) {
//       if (err) {
//         console.error("createPool() error: " + err.message);
//         return;
//       }
//     }
//   );
//   oracledb.createPool({
//       user: configDataBase.user,
//       password: configDataBase.password,
//       connectString: configDataBase.connectString,
//       // Default values shown below
//       // externalAuth: false, // whether connections should be established using External Authentication
//       // poolMax: 4, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
//       // poolMin: 0, // start with no connections; let the pool shrink completely
//       // poolIncrement: 1, // only grow the pool by one connection at a time
//       // poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
//       // poolPingInterval: 60, // check aliveness of connection if in the pool for 60 seconds
//       // queueRequests: true, // let Node.js queue new getConnection() requests if all pool connections are in use
//       // queueTimeout: 60000, // terminate getConnection() calls in the queue longer than 60000 milliseconds
//       poolAlias: 'pool2' // could set an alias to allow access to the pool via a name
//       // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
//     },
//     function(err, pool) {
//       if (err) {
//         console.error("createPool() error: " + err.message);
//         console.log(err);
//         return;
//       }
//     }
//   );
// }
//
//
// describe('Oracle', function() {
//   init();
//   it('testConnection', function(done) {
//     oracledb.getConnection('pool2',
//       function(err, connection) {
//         if (err) {
//           console.error(err.message);
//           return;
//         }
//         connection.execute(
//           // The statement to execute
//           "SELECT * " +
//           "FROM TABLE1 ",
//           // "WHERE department_id = :id",
//
//           // The "bind value" 180 for the "bind variable" :id
//           // [180],
//
//           // Optional execute options argument, such as the query result format
//           // or whether to get extra metadata
//           // { outFormat: oracledb.OBJECT, extendedMetaData: true },
//
//           // The callback function handles the SQL execution results
//           function(err, result) {
//             if (err) {
//               console.error(err.message);
//               doRelease(connection);
//               return;
//             }
//             console.log(result.metaData); // [ { name: 'DEPARTMENT_ID' }, { name: 'DEPARTMENT_NAME' } ]
//             console.log(result.rows); // [ [ 180, 'Construction' ] ]
//             done();
//             doRelease(connection);
//           });
//       });
//
//     // Note: connections should always be released when not needed
//     function doRelease(connection) {
//       connection.close(
//         function(err) {
//           if (err) {
//             console.error(err.message);
//           }
//         });
//     }
//
//   });
// });
