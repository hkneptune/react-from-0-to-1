//
//  RCTSQLManager.m
//  RN2
//
//  Created by jianqiang on 17/3/23.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "RCTSQLManager.h"

@implementation RCTSQLManager

RCT_EXPORT_MODULE();

// Available as NativeModules.SQLManager.getUserDefaults
RCT_EXPORT_METHOD(getUserDefaults:(NSString *)inputValue callback:(RCTResponseSenderBlock)callback)
{
  NSString *ret = [[NSUserDefaults standardUserDefaults] objectForKey:inputValue];
  NSLog(@"ret = %@",ret);
  if(!ret){
    ret = @"";
  }
  callback(@[ret]);
}

RCT_EXPORT_METHOD(setUserDefaults:(NSString *)key value:(NSString *)value)
{
  [[NSUserDefaults standardUserDefaults] setObject: value forKey:key];
}

@end
