// ==UserScript==
// @name         YouTube Grid Columns Modifier
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Change the number of items per row in YouTube's grid view
// @author       xydesu
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Add the CSS style to modify the grid items per row
    GM_addStyle(`
        ytd-rich-grid-renderer {
            --ytd-rich-grid-items-per-row: 5 !important;
        }
    `);
})();