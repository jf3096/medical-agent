//var PreventOverScroll = require("preventoverscrolljs").PreventOverScroll;
var preventoverscrolljs_1 = require("preventoverscrolljs");
var isAndroid = /(Android)/i.test(navigator.userAgent);
var outer = (false ? 'wrapper' : 'container');
module.exports = new preventoverscrolljs_1.PreventOverScroll({ list: [outer] });
//# sourceMappingURL=preventOverflowScrollSetup.js.map