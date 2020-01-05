// 前面加;防止跟其他js压缩时报错
;(function (global) {
  // 开启严格模式
  'use strict';

  // 构造函数定义一个类
  function Util(selector, options) {
    this.element = document.querySelector(selector);
    // this.show = Util.show;
  };
  // 原型上提供方法
  Util.prototype = {

    // construct: Util,
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

// 变量方法 不用new
(function (global) {
  // 开启严格模式
  'use strict';

  let util = {
    show: function (selector) {
      this.element = document.querySelector(selector).style.display = 'block';
    }
  };

  if (typeof module !== 'undefined' && module.exports) { // 兼容CommonJs规范
    module.exports = util;
  } else if (typeof define === 'function') { // 兼容AMD/CMD规范
    define(function () {
      return util;
    });
  } else { // 注册全局变量 兼容直接使用script标签引入插件
    // 等同于window.Util = Util
    global.util = util;
  }
})(this); // 此处的this为window对象


// commonJs 规范
// 同步应用

// 模块定义 module.exports
var x = 5;
var addX = function (value) {
  return value + x;
};
module.exports.x = x;
module.exports.addX = addX;

// 模块引用 require
var example = require('./example.js');

console.log(example.x); // 5
console.log(example.addX(1)); // 6

// 与AMD规范的兼容性
define(function (require, exports, module){
  var someModule = require("someModule");
  var anotherModule = require("anotherModule");

  someModule.doTehAwesome();
  anotherModule.doMoarAwesome();

  exports.asplode = function (){
    someModule.doTehAwesome();
    anotherModule.doMoarAwesome();
  };
});


// AMD 规范
// 异步模块引用

// 模块定义 define

// 独立模块定义
define(function () {
  return {
    method1: function() {},
    method2: function() {},
  };
});
// 非独立模块定义
define(['module1', 'module2'], function(m1, m2) {
  //module1 module2 依赖的模块 m1,m2 分别对应module1 与 module2
  return {
    method: function() {
      m1.methodA();
      m2.methodB();
    }
  };
});
// 模块引用 require
require(['foo', 'bar'], function ( foo, bar ) {
  foo.doSomething();
});

// ES6 moduel 模块定义 export
//导出变量
export var color = "red";
export let name = "cz";
export const age = 25;
//导出函数
export function add(num1,num2){
  return num1+num2;
}
//导出类
export class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
}
function multiply(num1, num2) {
  return num1 * num2;
}
// 导出对象 即导出引用
export {multiply}
// 模块引用 import
import { identifier1,identifier2 } from "./example.js"
