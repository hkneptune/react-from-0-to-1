let instance = null;     // 工具类单例对象
let net = null;    // 单例中保存的Navigator对象

export default class NetUtil {
      // 在构造函数中实现单例
    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }

    // 为单例对象保存net
    setNet = (mNet) => {
        net = mNet;
    }


    get = (url, params, callback) => {
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        
        //fetch请求
        fetch(url)
          .then((response) => response.json())
          .then((responseData) => {callback(responseData)})
          .done();
    }
}

