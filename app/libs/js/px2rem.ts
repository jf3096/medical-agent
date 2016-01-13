declare var module;
(function (doc, win, module) {
    var basePx = 750;
    var getClientWidth = function () {
        return doc.documentElement.clientWidth > basePx ? basePx : doc.documentElement.clientWidth;
    }
    var config = {
        docEl: doc.documentElement,
        resizeEvt: 'orientationchange' in window ? 'orientationchange' : 'resize',
        firstWidth: doc.documentElement.clientWidth,

        setFontSize: function () {
            config.docEl.style.fontSize = 100 * (getClientWidth() / basePx) + 'px';
        },

        recalc: function () {
            var clientWidth = getClientWidth();
            if (!clientWidth) {
                return;
            }
            config.setFontSize();
            config.docEl.style.zoom = config.isUc() && config.isAndroid() ? clientWidth / config.firstWidth : 1;
        },
        isUc: function () {
            return navigator.userAgent.indexOf("UCBrowser") > 0;
        },
        isAndroid: function () {
            return navigator.userAgent.indexOf("Android") > 0;
        }
    };
    if (!doc.addEventListener) {
        return;
    }
    config.setFontSize();
    win.addEventListener(config.resizeEvt, config.recalc, false);
    doc.addEventListener('DOMContentLoaded', config.recalc, false);

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = null;
    }
}(document, window, module));
