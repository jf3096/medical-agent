import * as React from 'react';
import * as Router from "react-router-component";

import {Home} from "../modules/home/index";
import {Test} from "../modules/test/index";

const Locations = Router.Locations;
const Location = Router.Location;

export class AppRouter extends React.Component<any,any> {
    render() {
        return (
            <Locations hash>
                <Location path="/" handler={Home}/>
                <Location path="/test" handler={Test}/>
            </Locations>
        )
    }
}