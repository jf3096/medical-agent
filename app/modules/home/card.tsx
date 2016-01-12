//noinspection TypeScriptCheckImport
import css from './app/modules/home/css/card.less';
import * as React from "react";
import * as classNames from 'classnames';

type ReactProps = React.Props<React.DOMComponent<any>>;

interface CardProps extends ReactProps {
    href: string;
    fileName: string;
    cardName:string;
    //TODO: Use Enum Instead
    colorType:string;
}

export class Card extends React.Component<CardProps,{}> {
    private handleClick() {
        location.href = this.props.href;
    }

    render() {
        var cardClass = classNames("ma-card", this.props.colorType);
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

