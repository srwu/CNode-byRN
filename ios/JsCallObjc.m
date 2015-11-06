//
//  JsCallObjc.m
//  AwesomeProject
//
//  Created by wushuangrong on 15/8/27.
//  Copyright (c) 2015年 Facebook. All rights reserved.
//

#import "JsCallObjc.h"

#import "RCTBridge.h"
#import "RCTEventDispatcher.h"

#import <UIKit/UIKit.h>

@implementation JsCallObjc
@synthesize bridge = _bridge;

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(printString:(NSString *)input ) {
  NSLog(@"-----------%@",input);
}



RCT_EXPORT_METHOD(processString:(NSString *)input callback:(RCTResponseSenderBlock)callback)
{
  callback(@[[input stringByReplacingOccurrencesOfString:@"Goodbye" withString:@"Hello"]]);
}

RCT_EXPORT_METHOD(sendMsg) {
  [self.bridge.eventDispatcher sendDeviceEventWithName:@"aMsg" body:@{@"name":@"jack"}];
}

@end
