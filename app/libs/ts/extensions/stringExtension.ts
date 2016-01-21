interface String {
    format:(...args) => string;
    hash:()=>number;
}
/**
 * 模拟 C# String.Format 方法
 *
 * @param {Object} ...args
 * @return {String} 最终完成继承拓展对象
 * @example "Hello {0}, {1}".format("world", "Halo")
 * @output "Hello world, Halo"
 */
String.prototype.format = function (...args) {
    return this.replace(/\{(\d+)\}/g, function (m, i) {
        return args[i];
    });
};

/**
 * times 33 哈希算法
 *
 * @return {number} 哈希后的数字
 */
String.prototype.hash = function () {
    let hash = 5381;
    let index = this.length;
    while (index) {
        hash = (hash * 33) ^ this.charCodeAt(--index);
    }
    return hash >>> 0;
};


