/**
 * cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) LSH 2015
 * Copyright (c) 2015, CKC
 */

var FireBaseLoader = function (require, exports, module) {
var exec = require("cordova/exec");

/**
 * Constructor.
 *
 * @returns {FireBase}
 */

 function FireBase() {
 }

/**
 * Read code from scanner.
 *
 * @param {appName} FireBase App Name
 *
 * @param {Function} successCallback
 *
 * @param {Function} errorCallback
 */
FireBase.prototype.init = function (appName, successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        };
    }

    if (successCallback == null) {
        successCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("FireBase.init failure: failure parameter must be a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("FireBase.init failure: success callback parameter must be a function");
        return;
    }

    exec(successCallback, errorCallback, 'FireBase', 'init', [appName]);
};

//-------------------------------------------------------------------
FireBase.prototype.setPersistenceEnabled = function (persistenceEnabled, successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        };
    }
    
    if (successCallback == null) {
        successCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("FireBase.setPersistenceEnabled failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("FireBase.setPersistenceEnabled failure: success callback parameter must be a function");
        return;
    }

    exec(successCallback, errorCallback, 'FireBase', 'setPersistenceEnabled', [persistenceEnabled]);
};

//-------------------------------------------------------------------
FireBase.prototype.readData = function (successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("FireBase.readData failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("FireBase.readData failure: success callback parameter must be a function");
        return;
    }

    exec(successCallback, errorCallback, 'FireBase', 'readData', []);
};

//-------------------------------------------------------------------
FireBase.prototype.writeData = function (object, successCallback, errorCallback) {
    if (errorCallback == null) {
        errorCallback = function () {
        };
    }

    if (typeof errorCallback != "function") {
        console.log("FireBase.writeData failure: failure parameter not a function");
        return;
    }

    if (typeof successCallback != "function") {
        console.log("FireBase.writeData failure: success callback parameter must be a function");
        return;
    }

    exec(successCallback, errorCallback, 'FireBase', 'writeData', [object]);
};

var fireBase = new FireBase();
module.exports = fireBase;

    }

    FireBaseLoader(require, exports, module);

    cordova.define("cordova/plugin/FireBase", FireBaseLoader);
