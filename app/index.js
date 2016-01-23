require("./setup/preventOverflowScrollSetup");
require("./setup/fastclickSetup");
require("./libs/ts/extensions/index");
var React = require("react");
var ReactDOM = require("react-dom");
var router_1 = require('./configs/router');
ReactDOM.render(React.createElement(router_1.AppRouter, null), document.getElementById('container'));
//# sourceMappingURL=index.js.map