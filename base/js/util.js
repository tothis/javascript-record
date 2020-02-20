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

    // 阻止冒泡行为
    Util.stopBubble = stopBubble;
    // 阻止浏览器默认行为
    Util.stopDefault = stopDefault;
    // 增加监听事件
    Util.addEvent = addEvent;
    // 删除监听事件
    Util.removeEvent = removeEvent;
    // class是否存在
    Util.hasClass = hasClass;

    // 阻止冒泡行为
    function stopBubble(e) {
        // 如事件对象存在 则当前为非ie浏览器
        if (e && e.stopPropagation)
            e.stopPropagation();
        else
        // ie中阻止冒泡行为方式
            window.event.cancelBubble = true;
    }

    // 阻止浏览器默认行为
    function stopDefault(e) {
        // 非ie中阻止默认行为方式
        if (e && e.preventDefault)
            e.preventDefault();
        // ie中阻止默认行为方式
        else
            window.event.returnValue = false;
        return false;
    }

    // 添加监听事件
    function addEvent(ele, event, fun) {
        if (window.attachEvent) {
            ele.attachEvent('on' + event, fun)
        } else if (window.addEventListener) {
            ele.addEventListener(event, fun, false);
        } else {
            ele['on' + event] = fun;
        }
    }

    // 删除监听事件
    function removeEvent(ele, event, fun) {
        if (window.detachEvent) {
            ele.detachEvent('on' + event, fun);
        } else if (window.removeEventListener) {
            ele.removeEventListener(event, fun, false);
        } else {
            ele['on' + event] = null;
        }
    }

    // class是否存在
    function hasClass(ele, className) {
        return new RegExp('(^|\\s)' + className + '(\\s|$)').test(ele.className)
    }

    return Util;
});
