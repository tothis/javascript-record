// ==UserScript==
// @name         翻页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  翻页
// @author       李磊
// @match        *://www.mzitu.com/*
// @grant        none
// ==/UserScript==
document.onkeyup = function (event) { // 键盘按下并抬起事件
    let e = event || window.event || arguments.callee.caller.arguments[0];
    let href = location.href;
    let index = indexNum(href, '/', 3);
    let pre = href.substring(0, index + 1);
    let suf = href.substring(index + 1);

    if (e.keyCode == 37) {
        location.href = pre + ((Number(suf) - 1));
    } else if (e.keyCode == 39) {
        if (pre === '') {
            location.href = href + '/2';
            return;

        }
        location.href = pre + ((Number(suf) + 1));
    }
}

/**
 * 获取某个字符第n次出现的位置
 * @param str 源字符串
 * @param ch 目标字符
 * @param num 第几次出现
 * @returns {number}
 */
function indexNum(str, ch, num) {
    let index = str.indexOf(ch);
    for (let i = 0; i < num; i++) {
        index = str.indexOf(ch, index + 1);
    }
    return index;
}
