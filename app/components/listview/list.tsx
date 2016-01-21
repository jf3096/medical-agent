import './css/list.less';
import * as React from "react";

export interface IListProps {
    href: string;
    content:any;
    key:number;
}

export class ListProps implements IListProps {
    key:number;
    content:any;
    href:string;

    constructor(href:string, content:any) {
        this.href = href;
        this.content = content;
    }
}

export class List extends React.Component<IListProps,any> {

    private handleClick(e) {
        e.preventDefault();
        location.href = this.props.href;
    }

    render() {
        return (
            <li className="list">
                <a className="list-link" onClick={this.handleClick.bind(this)}>
                    {this.props.content}
                </a>
            </li>
        );
    }
}

