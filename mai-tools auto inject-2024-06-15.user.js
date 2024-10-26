// ==UserScript==
// @name         mai-tools auto inject
// @namespace    https://myjian.github.io/mai-tools/?hl=zh_TW
// @version      2024-06-15
// @description  Auto inject mai-tools script
// @author       xy
// @match        https://maimaidx-eng.com/maimai-mobile/*
// @exclude      https://maimaidx-eng.com/maimai-mobile/record/
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://maimai.sega.com&size=64
// @grant        none
// ==/UserScript==

(function(d){if(["https://maimaidx.jp","https://maimaidx-eng.com"].indexOf(d.location.origin)>=0){var s=d.createElement("script");s.src="https://myjian.github.io/mai-tools/scripts/all-in-one.js?t="+Math.floor(Date.now()/60000);d.body.append(s);}})(document)