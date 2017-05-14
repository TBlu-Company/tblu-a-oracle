'use strict';
const oracleSimpleQuery = require('./actions/oracleSimpleQuery.js');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OBJECT;

exports.run = (data, dBconfig) => new Promise((resolve, reject) => {

  switch (data.moduleFunction) {
    case "oracleSimpleQuery":
      oracleSimpleQuery(data, dBconfig).then(result => resolve(result)).catch(error => reject(error));
      break;
    default:
      reject(new Error('unknow funcition'));
      break;
  }
});
