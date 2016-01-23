//var PreventOverScroll = require("preventoverscrolljs").PreventOverScroll;
import {PreventOverScroll} from "preventoverscrolljs";
let isAndroid = /(Android)/i.test(navigator.userAgent);
var outer = (false ? 'wrapper' : 'container');
export = new PreventOverScroll({list: [outer]});