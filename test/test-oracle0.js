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
// describe('Oracle', function() {
//   it('testConnection', function(done) {
//     oracledb.outFormat = oracledb.OBJECT;
//     oracledb.getConnection('pool2').then((connection) => {
//       return connection.execute(
//         "SELECT * " +
//         "FROM TABLE1 "
//       ).then((result) => {
//         console.log(result.rows);
//         done();
//         return connection.close();
//       }).catch((err) => {
//         console.log(err.message);
//         return connection.close();
//       });
//     }).catch((err) => {
//       console.error(err.message);
//     });
//   });
// });
