import * as React from "react";
import {Card, CardProps, ColorEnum,ICardProps} from "./card";

export class Navigation extends React.Component<any,any> {
    private cardPropsArray:Array<ICardProps>;

    constructor() {
        super();
        this.cardPropsArray = new Array<CardProps>();
        this.cardPropsArray.push(
            new CardProps("", "./img/nav-card.png", "我的名片", ColorEnum.BLUE),
            new CardProps("", "./img/nav-card.png", "我的医生", ColorEnum.RED),
            new CardProps("", "./img/nav-card.png", "统方查询", ColorEnum.YELLOW),
            new CardProps("", "./img/nav-card.png", "我的药品", ColorEnum.GREEN)
        )
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        let cardList = this.cardPropsArray.map((cardProps) => {
            return (
                <li>
                    <Card
                        href={cardProps.href}
                        fileName={cardProps.fileName}
                        cardName={cardProps.cardName}
                        colorType={cardProps.colorType}
                    />
                </li>
            );
        });
        return (
            <ul className="nav">
                {cardList}
            </ul>
        );
    }
}