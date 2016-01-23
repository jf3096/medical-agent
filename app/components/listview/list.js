var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('./css/list.less');
var React = require("react");
var ListProps = (function () {
    function ListProps(href, content) {
        this.href = href;
        this.content = content;
    }
    return ListProps;
})();
exports.ListProps = ListProps;
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
    }
    List.prototype.handleClick = function (e) {
        e.preventDefault();
        location.href = this.props.href;
    };
    List.prototype.render = function () {
        return (React.createElement("li", {"className": "list"}, React.createElement("a", {"className": "list-link", "onClick": this.handleClick.bind(this)}, this.props.content)));
    };
    return List;
})(React.Component);
exports.List = List;
//# sourceMappingURL=list.js.map