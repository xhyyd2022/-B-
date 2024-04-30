// ==UserScript==
// @name         隐藏B站部分直播间马赛克
// @namespace    XHYYD
// @version      1.05
// @description  一个非常简单的脚本
// @author       YDYYD
// @match        *://live.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @license      MIT
// @grant        none
// ==/UserScript==
(function() {
    var count = 0;
    var intervalId = setInterval(() => {
        const element = document.getElementsByClassName("web-player-module-area-mask")[0];
        if (element && document.contains(element)) {
            element.style.transition = "opacity 0.5s";
            element.style.opacity = "0";
            setTimeout(() => {
                element.remove();
                console.log('已删除马赛克');
                clearInterval(intervalId);
            }, 500);
            return;
        }
        if (++count >= 30) {
            clearInterval(intervalId);
        }
    }, 1000);
})();
