var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Router = require("react-router-component");
var index_1 = require("../modules/home/index");
var index_2 = require("../modules/test/index");
var Locations = Router.Locations;
var Location = Router.Location;
var AppRouter = (function (_super) {
    __extends(AppRouter, _super);
    function AppRouter() {
        _super.apply(this, arguments);
    }
    AppRouter.prototype.render = function () {
        return (React.createElement(Locations, {"hash": true}, React.createElement(Location, {"path": "/", "handler": index_1.Home}), React.createElement(Location, {"path": "/test", "handler": index_2.Test})));
    };
    return AppRouter;
})(React.Component);
exports.AppRouter = AppRouter;
//# sourceMappingURL=router.js.map