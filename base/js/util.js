// umd规范 前面加;防止跟其他js压缩时报错
;(function (global, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // 检查CommonJS是否可用
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // 检查AMD是否可用
        define(factory)
    } else { // 两种都不能用 把模块添加到JavaScript的全局命名空间中
        global = global || self, global.Util = factory();
    }
})(this, function () { // 此处的this为window对象
    // 开启严格模式
    'use strict';

    function show(selector) {
        document.querySelector(selector).style.display = 'block';
    }

    // 构造函数定义一个类
    function Util() {
        // 提供实例方法
        this.show = show;
        console.log('Util');
    };

    // 提供静态方法
    Util.show = show;

    // 原型上提供实例方法
    // Util.prototype.show = show;
    // 构造器提供静态方法
    // Util.prototype.constructor.show = show;

    // console.log('构造器', Util.prototype.constructor === Util); // true
    return Util;
});
