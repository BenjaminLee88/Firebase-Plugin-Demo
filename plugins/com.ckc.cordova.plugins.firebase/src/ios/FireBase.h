//
//  CDVFirebase.h
//  Hello World
//
//  Created by Simba on 10/6/15.
//
//

#import <Cordova/CDVPlugin.h>

@interface CDVFirebase : CDVPlugin

- (void)init:(CDVInvokedUrlCommand*)command;

- (void)setPersistenceEnabled:(CDVInvokedUrlCommand*)command;

- (void)readData:(CDVInvokedUrlCommand*)command;
- (void)writeData:(CDVInvokedUrlCommand*)command;

@end
