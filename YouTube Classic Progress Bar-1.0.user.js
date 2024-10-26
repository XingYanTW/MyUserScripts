// ==UserScript==
// @name         YouTube Classic Progress Bar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Revert YouTube's progress bar to a solid color (removes fade to pink at the end).
// @author       xy
// @include        *://www.youtube.com/watch?v=*
// @include        *://www.youtube.com/shorts/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @downloadURL https://github.com/XingYanTW/MyUserScripts/raw/refs/heads/main/YouTube%20Classic%20Progress%20Bar-1.0.user.js
// @updateURL  https://github.com/XingYanTW/MyUserScripts/raw/refs/heads/main/YouTube%20Classic%20Progress%20Bar-1.0.user.js
// ==/UserScript==

function addStyle() {
    let css = `
    .ytp-cairo-refresh-signature-moments .ytp-play-progress {
        background: #f03 !important;
    }
    ytd-thumbnail-overlay-resume-playback-renderer[enable-refresh-signature-moments-web] #progress.ytd-thumbnail-overlay-resume-playback-renderer {
	background: #f03 !important;
    }
    `;
    let style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}

(function () {
    'use strict';
    console.log("Applying custom style to progress bar");
    addStyle();
})();
