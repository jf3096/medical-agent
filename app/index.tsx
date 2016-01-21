import "./setup/preventOverflowScrollSetup";
import "./setup/fastclickSetup";
import "./libs/ts/extensions/index";

import * as React from "react";
import * as ReactDOM from "react-dom";

import {AppRouter} from './configs/router';

ReactDOM.render(<AppRouter />, document.getElementById('container'));