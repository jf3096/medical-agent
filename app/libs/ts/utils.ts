/**
 * 工具类
 *
 * @module 工具类
 * @class Utils
 * @constructor
 */
export class Utils {
    /**
     * 生成16位UUID
     *
     * @method generateUUID
     * @return {String} UUID
     */
    public static generateUUID():string {
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
    }

    /**
     * 拓展当前类
     *
     * @method extend
     * @param {Object} ...objects - 需要拓展的對象，循序從又到左
     * @return {String} 最终完成继承拓展对象
     */
    public static extend(...objects:Object[]):any {
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
    }
}