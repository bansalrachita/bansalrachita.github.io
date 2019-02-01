import React from "react";

const BadgesView = ({badges}) => {
    return (
        badges.map((badge, index) => (
            <span key={`${badge}-` + index} className="badges">{badge}</span>
        ))
    )
};

export default BadgesView;