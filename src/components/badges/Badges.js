import React, {Component} from "react";
import BadgesView from "./BadgesView";

export default class Badges extends Component {
    render() {
        const {badges} = this.props;
        return (
            <div>
                <BadgesView badges={badges}/>
            </div>
        )
    }
}