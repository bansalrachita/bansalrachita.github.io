import React, {Component} from "react";
import BadgesView from "./BadgesView";
import "../../common/main.css";

export default class Badges extends Component {
    render() {
        const {badges} = this.props;
        return (
            <div className="badges-container">
                <BadgesView badges={badges}/>
            </div>
        )
    }
}