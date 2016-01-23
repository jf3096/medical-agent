var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('./css/card.less');
var React = require("react");
var classNames = require('classnames');
(function (ColorEnum) {
    ColorEnum[ColorEnum["BLUE"] = 0] = "BLUE";
    ColorEnum[ColorEnum["RED"] = 1] = "RED";
    ColorEnum[ColorEnum["YELLOW"] = 2] = "YELLOW";
    ColorEnum[ColorEnum["GREEN"] = 3] = "GREEN";
})(exports.ColorEnum || (exports.ColorEnum = {}));
var ColorEnum = exports.ColorEnum;
var CardProps = (function () {
    function CardProps(href, fileName, cardName, colorType) {
        this.href = href;
        this.fileName = fileName;
        this.cardName = cardName;
        this.colorType = colorType;
    }
    return CardProps;
})();
exports.CardProps = CardProps;
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        _super.apply(this, arguments);
    }
    Card.prototype.handleClick = function (e) {
        e.preventDefault();
        location.href = this.props.href;
    };
    Card.prototype.render = function () {
        var cardClass = classNames("ma", "ma-" + this.props.colorType);
        return (React.createElement("a", {"className": cardClass, "onClick": this.handleClick.bind(this)}, React.createElement("img", {"src": this.props.fileName}), React.createElement("div", {"className": "ma-text"}, this.props.cardName)));
    };
    return Card;
})(React.Component);
exports.Card = Card;
//# sourceMappingURL=card.js.map