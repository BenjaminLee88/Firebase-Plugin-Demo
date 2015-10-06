/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('test_persistency').addEventListener('click', this.enablePersistence, false);
        document.getElementById('disable_persistency').addEventListener('click', this.disablePersistence, false);
        document.getElementById('test_read').addEventListener('click', this.readData, false);
        document.getElementById('test_write').addEventListener('click', this.writeData, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    enablePersistence: function() {
        var firebase = cordova.require("cordova/plugin/FireBase");

        firebase.init('demobenjamin', function(success) {

            firebase.setPersistenceEnabled(true, function(success) {
                alert("persistenceEnabled success");
            }, function(fail) {
                alert("persistenceEnabled failed: " + fail);
            });
          }, function(fail) {
            alert("init failed: " + fail);
          }
        );

    },
    
    disablePersistence: function() {
        var firebase = cordova.require("cordova/plugin/FireBase");
        
        firebase.init('demobenjamin', function(success) {
                      
            firebase.setPersistenceEnabled(false, function(success) {
                alert("persistenceDisabled success");
            }, function(fail) {
                alert("persistenceDisabled failed: " + fail);
            });
        }, function(fail) {
            alert("init failed: " + fail);
        });
        
    },

    readData: function() {
        var firebase = cordova.require("cordova/plugin/FireBase");

        firebase.init('demobenjamin', function(success) {
            firebase.readData(function(success) {
                console.log(success);
                alert(success);
            }, function(fail) {
                alert("readData failed: " + fail);
            });
          }, function(fail) {
            alert("init failed: " + fail);
          }
        );

    },

    writeData: function() {
        var firebase = cordova.require("cordova/plugin/FireBase");

        firebase.init('demobenjamin', function(success) {
            var testObj = { 'string': 'stringValue', 'int': 5, 'array': ['ele1', 'ele2'], 'object': {'key1': 'value1'} };
            firebase.writeData(testObj, function(success) {
                alert("writeData success");
            }, function(fail) {
                alert("writeData failed: " + fail);
            });
          }, function(fail) {
            alert("init failed: " + fail);
          }
        );

    }
};
