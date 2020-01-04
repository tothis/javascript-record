// 前面加;防止跟其他js压缩时报错
;(function (global) {
    // 开启严格模式
    'use strict';

    // 构造函数定义一个类
    function Util(element, options) {
        this.element = element;
    };
    // 原型上提供方法
    Util.prototype = {
        //定义方法
        show: function () {
            console.log(this.element);
            this.element.style.display = 'block';
        }
    };

    if (typeof module !== 'undefined' && module.exports) { // 兼容CommonJs规范
        module.exports = Util;
    } else if (typeof define === 'function') { // 兼容AMD/CMD规范
        define(function () {
            return Util;
        });
    } else { // 注册全局变量 兼容直接使用script标签引入插件
        // 等同于window.Util = Util
        global.Util = Util;
    }
})(this); // 此处的this为window对象
