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
            <h3>Federated Wireless Inc.</h3>
            @Federated Wireless, I've been developing a Spectrum Access Controller web
            application in React, Redux and Node.js.
            I implemented a testing framework to back the web application testing using Mocha,
            Chai, Karma, Selenium & integrated it with Jenkins CI pipeline.
            <p>
                We have a micro-services architecture and I contributed to it by designing a
                server-less GraphQL micro-service architecture using Node.js and MongoDB
                hosted on AWS Cloud, and building scalable, secure and lightweight APIs on top of it
                to represent large
                amounts of data in the application.
            </p>
            <Badges badges={workBadges[0]}/>
            <hr/>
            <h3>Boston Children's Hospital</h3>
            <p>
                I Interned at BCH during 2015 and was migrating from Sybase to SQL Server & JScript
                application for keeping Biobank data.
                I worked on data modeling, design and development of user interface, SQL scripts &
                stored procedure in T-SQL.
            </p>
            <Badges badges={workBadges[1]}/>
            <hr/>
            <h3>Infosys Ltd.</h3>
            <p>
                During my time @Infosys, I developed data extraction scripts for data migration in
                GBs and Implemented performance tuning and multithreading to minimize execution time
                of scripts running on the UNIX server.
            </p>
            <Badges badges={workBadges[2]}/>
        </div>
    )
};

export default WorkView;