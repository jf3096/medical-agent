import * as React from "react";
import './css/listWrapper.less';
import {IListProps,ListProps,List} from "./list";

export class ListWrapper extends React.Component<any,any> {
    private listPropsArray:Array<IListProps>;

    constructor() {
        super();
        this.listPropsArray = new Array<ListProps>();
        this.listPropsArray.push(
            new ListProps("javascript:;", "Test"),
            new ListProps("javascript:;", "Test2"),
            new ListProps("javascript:;", "Test3"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;", "Test4"),
            new ListProps("javascript:;javascript:;", "Test4")
        )
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        let list = this.listPropsArray.map((listProps, index) => {
            return (
                <List key={index}
                      href={listProps.href}
                      content={listProps.content}
                />
            );
        });

        return (
            <ul className="lw">
                {list}
            </ul>
        );
    }
}