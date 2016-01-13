//import './app/modules/home/css/card.less';
import './css/card.less';
import * as React from "react";
import * as classNames from 'classnames';

export enum ColorEnum{
    BLUE,
    RED,
    YELLOW,
    GREEN
}

export interface ICardProps extends React.Props<React.DOMComponent<any>> {
    href: string;
    fileName: string;
    cardName:string;
    colorType:ColorEnum;
}

export class CardProps implements ICardProps {
    href:string;
    fileName:string;
    cardName:string;
    colorType:ColorEnum;

    constructor(href:string, fileName:string, cardName:string, colorType:ColorEnum) {
        this.href = href;
        this.fileName = fileName;
        this.cardName = cardName;
        this.colorType = colorType;
    }
}

export class Card extends React.Component<ICardProps,any> {
    private handleClick() {
        location.href = this.props.href;
    }

    render() {
        var cardClass = classNames("ma", "ma-" + this.props.colorType);
        return (
            <a className={cardClass} onClick={this.handleClick.bind(this)}>
                <img src={this.props.fileName}/>
                <div className="ma-text">
                    {this.props.cardName}
                </div>
            </a>
        );
    }
}

