import Badges from "../badges/Badges";
import React from "react";
import {workBadges} from "../../constants/constants";
import "../../common/main.css"

const WorkView = ({work}) => {
    return (
        <div
            className="work"
        >
            <h1>{work.frontmatter.title}</h1>
            <h3>Federated Wireless Inc., <small>Feb 2019</small></h3>
            I've developed web application in React, Redux and NodeJS and implemented the test framework using
            Mocha, Chai, Karma & Selenium, and integrated it with the CI pipeline using Jenkins & Gitlab API.
            <p>
                I also work on the application layer building micro-services using
                AWS Lambda Functions, ServerlessJS, GraphQL, NodeJS, Express and MongoDB
                which is hosted on AWS Cloud.
            </p>
            <Badges badges={workBadges[0]}/>
            <hr/>
            <h3>Boston Children's Hospital, <small>Dec 2015</small></h3>
            <p>
                I was tasked with data migration of Sybase ASA DB to MS-SQL Server & implementation of user interface in JScript.
                I worked on Snow flake data modeling, design and development of user interface, SQL scripts &
                stored procedure in T-SQL.
            </p>
            <Badges badges={workBadges[1]}/>
            <hr/>
            <h3>Infosys Ltd., <small>July 2014</small></h3>
            <p>
                I developed ETL scripts for data migration in GBs for various customers. Implemented performance tuning and
                multithreading to minimize execution time of scripts running on the UNIX server.
            </p>
            <Badges badges={workBadges[2]}/>
        </div>
    )
};

export default WorkView;