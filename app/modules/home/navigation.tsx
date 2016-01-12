import * as React from "react";
type ReactProps = React.Props<React.DOMComponent<any>>;

interface NavigationProps extends ReactProps {
    icon : string;
    caption : string;
    handler : ()=>boolean;
    onCloseRequest? : ()=>void;
}

export class Navigation extends React.Component<NavigationProps,{}> {
    render() {
        return (
            <ul className="nav">
                <li></li>
            </ul>
        );
    }

    private handleClick() {

    }
}