'use strict';
const Datastore = require('nedb');
const path = require('path');
const dirname = path.dirname(__filename);
const dBconfig = new Datastore(dirname + '/config.db');
dBconfig.loadDatabase();
const core = require('../index');

const configDataBase = require('./configDataBase');

describe('Oracle', function() {
    it('testConnection', function(done) {
        console.log(configDataBase);
        done();
    });
});
