package jianqiang.com.youngheart.engine;

import android.content.Intent;
import android.text.TextUtils;
import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.IllegalViewOperationException;

import jianqiang.com.youngheart.activity.others.LoginActivity;
import jianqiang.com.youngheart.activity.others.TestNullValueActivity;

public class ExampleRNInterface extends ReactContextBaseJavaModule {
    ReactApplicationContext reactContext;

    static ReactApplicationContext reactContextStatic;

    public ExampleRNInterface(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext=reactContext;//保存上下文

        ExampleRNInterface.reactContextStatic = reactContext;
    }

    // 这个函数的用途是返回原生代码模块的名称
    @Override
    public String getName() {
        return "ExampleRNInterface";
    }

    @ReactMethod   //必须有当前注解, 否则不能被RN调用, 函数也不能有返回值
    public void handleMessage(String message){// 这是原生代码处理消息
        //输出日志
        Log.i("ExampleRNInterface","在RN接受到了消息:"+message);

        Intent intent=new Intent(reactContext, TestNullValueActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        reactContext.startActivity(intent);
    }

    @ReactMethod   //必须有当前注解, 否则不能被RN调用, 函数也不能有返回值
    public void handleMessageWithCallBack(String message, Callback callback){// 这是原生代码处理消息
        //输出日志
        Log.i("ExampleRNInterface","在RN接受到了消息:"+message);

        //回调React
        callback.invoke("add user success");
    }

    @ReactMethod
    public void tryCallBack(String name, String psw, Promise promise) {
        try {
            if (TextUtils.isEmpty(name) && TextUtils.isEmpty(psw)) {
                promise.reject("0", "user name  or psw is empty");
            }
            WritableMap map = Arguments.createMap();
            map.putString("user_id", "success2");
            promise.resolve(map);
        } catch (IllegalViewOperationException e) {
            promise.reject("2", e.getMessage());
        }
    }

    //向React发送消息
    public static void sendMessage(String message){
        ExampleRNInterface.reactContextStatic.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("Android2RN",message);
    }
}
