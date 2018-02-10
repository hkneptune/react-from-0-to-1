let instance = null;     // 工具类单例对象
let navi = null;    // 单例中保存的Navigator对象

export default class PageUtil {
    // 在构造函数中实现单例
    constructor() {
        if(!instance){
            instance = this;
        }
        return instance;
    }
    // 为单例对象保存Navigator
    setNavigator = (navigator) => {
        navi = navigator;
    }

    /**
     * 页面跳转方法
     * @param component 目标组件对象
     * @param params 需要传递的参数组成的对象
     */
    jumpPageWithComponent = (component, params) => {
        if (!params) {
            params = {};
        }

        let route = {
            component: component,
            params: params
        };

        if (navi) {
            navi.push(route)
        }
    }
}