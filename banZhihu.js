// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/
// @grant        none
// ==/UserScript==

function randomString(len) {
　　len = len || 32;
　　var $chars = '1234567890-=qwertyuiopasdfghjkl;zxcvbnm,.[];./!@#$%^&*()_QWERTYUIOPASDFGHJKL:"ZXCVBNM<>';
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

(function() {
    let myLen = 10, l = randomString(myLen), tmp = document.title;
    document.title = l;
    if (prompt(`请输入: 标题中的字符串 来继续刷知乎`) != l) {
        window.location.href = 'about:blank';
        document.title = tmp;
    }
})();
