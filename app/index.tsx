import {FastClick} from "fastclick";
import "./libs/js/px2rem.ts";
import * as React from "react";
import {Home} from "./modules/home/index";

FastClick.attach(document.body);

React.render(<Home />, document.getElementById('container'));