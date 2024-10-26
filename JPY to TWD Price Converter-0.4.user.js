// ==UserScript==
// @name         JPY to TWD Price Converter
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Automatically converts prices from JPY to TWD on pages with the class 'variation-price'.
// @author       xy
// @include    		https://*booth.pm/*
// @include         https://www.fanbox.cc*
// @include         https://*fantia.jp/*
// @grant        none
// @downloadURL
// @updateURL
// ==/UserScript==

(function () {
    'use strict';
    window.addEventListener('load', function () {
        const apiUrl = 'https://api.exchangerate-api.com/v4/latest/JPY';

        function convertPrices(exchangeRate) {
            //booth.pm
            const boothpm = document.querySelectorAll('.variation-price');
            boothpm.forEach(element => {
                let priceText = element.innerText;
                let jpyAmount = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                let twdAmount = jpyAmount * exchangeRate;
                element.innerText += `\n(NT$ ${twdAmount.toFixed(2)})`;
            });
            //booth.pm main page
            const boothpmmain = document.querySelectorAll('.price');
            boothpmmain.forEach(element => {
                let priceText = element.innerText;
                let jpyAmount = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                let twdAmount = jpyAmount * exchangeRate;
                element.innerText += `\n(NT$ ${twdAmount.toFixed(2)})`;
            });
            //fanbox - hOqhHC
            const fanbox = document.querySelectorAll('.hOqhHC');
            fanbox.forEach(element => {
                let priceText = element.innerText;
                let jpyAmount = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                let twdAmount = jpyAmount * exchangeRate;
                element.innerText += `\n(${twdAmount.toFixed(2)}台幣)`;
            });
            //fanbox main - cyOqa-d
            const fanboxmain = document.querySelectorAll('.cyOqa-d');
            fanboxmain.forEach(element => {
                let priceText = element.innerText;
                let jpyAmount = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                let twdAmount = jpyAmount * exchangeRate;
                element.innerText += `\n(${twdAmount.toFixed(2)}台幣)`;
            });
            //fanbox main - cyOqa-d
            const fanboxmainstrong = document.querySelectorAll('.giQgGK strong');
            fanboxmainstrong.forEach(element => {
                let priceText = element.innerText;
                let jpyAmount = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                let twdAmount = jpyAmount * exchangeRate;
                element.innerText += `(${twdAmount.toFixed(2)}台幣)`;
            });
            //fantia - plan-price
            const fantia = document.querySelectorAll('.plan-price');
            fantia.forEach(element => {
                let priceText = element.innerText;
                let jpyAmount = parseFloat(priceText.replace(/[^\d.-]/g, ''));
                let twdAmount = jpyAmount * exchangeRate;
                element.innerText += `\n(${twdAmount.toFixed(2)}台幣)`;
            });
        }

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.rates.TWD;
                if (exchangeRate) {
                    convertPrices(exchangeRate);
                } else {
                    console.error('exchange rate not found.');
                }
            })
            .catch(error => console.error('Error fetching exchange rate:', error));

    });
})();