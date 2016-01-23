var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var card_1 = require("./card");
var Navigation = (function (_super) {
    __extends(Navigation, _super);
    function Navigation() {
        _super.call(this);
        this.cardPropsArray = new Array();
        this.cardPropsArray.push(new card_1.CardProps("", require('./img/nav-card.png'), "我的名片", card_1.ColorEnum.BLUE), new card_1.CardProps("", require('./img/nav-card.png'), "我的医生", card_1.ColorEnum.RED), new card_1.CardProps("", require('./img/nav-card.png'), "统方查询", card_1.ColorEnum.YELLOW), new card_1.CardProps("", require('./img/nav-card.png'), "我的药品", card_1.ColorEnum.GREEN));
    }
    Navigation.prototype.shouldComponentUpdate = function () {
        return false;
    };
    Navigation.prototype.render = function () {
        var cardList = this.cardPropsArray.map(function (cardProps, index) {
            return (React.createElement("li", {"key": index}, React.createElement(card_1.Card, {"href": cardProps.href, "fileName": cardProps.fileName, "cardName": cardProps.cardName, "colorType": cardProps.colorType})));
        });
        return (React.createElement("ul", {"className": "nav"}, cardList));
    };
    return Navigation;
})(React.Component);
exports.Navigation = Navigation;
//# sourceMappingURL=navigation.js.map