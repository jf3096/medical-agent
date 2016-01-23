/**
 * 工具类
 *
 * @module 工具类
 * @class Utils
 * @constructor
 */
var Utils = (function () {
    function Utils() {
    }
    /**
     * 生成16位UUID
     *
     * @method generateUUID
     * @return {String} UUID
     */
    Utils.generateUUID = function () {
        var i, random;
        var uuid = '';
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
                .toString(16);
        }
        return uuid;
    };
    /**
     * 拓展当前类
     *
     * @method extend
     * @param {Object} ...objects - 需要拓展的對象，循序從又到左
     * @return {String} 最终完成继承拓展对象
     */
    Utils.extend = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i - 0] = arguments[_i];
        }
        var newObj = {};
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    newObj[key] = obj[key];
                }
            }
        }
        return newObj;
    };
    return Utils;
})();
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map