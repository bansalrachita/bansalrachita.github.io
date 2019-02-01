import React, {Fragment} from "react"
import {graphql, Link} from "gatsby";
import "../common/main.css";

const Layout = ({data}) => {
    console.log(data);
    const url = data.url.edges[0].node.publicURL;
    const thumbNail = data.thumbNail.edges[0].node.publicURL;
    const logos = data.logos.edges;

    console.log(url);
    return (
        <Fragment>
            <div
                className="parallax"
            >
                <div>
                    <div
                        className="folder-top">
                        <div>
                            <img
                                alt="logo"
                                className="thumbnail-big"
                                src={thumbNail}/>
                        </div>
                        <div
                            className="folder-top-text"
                        >
                            <h3>Rachita Bansal</h3>
                            <h5>Software Engineer</h5>
                            <h5>Amateur Painter</h5>
                            <h5>Beginner Violinist</h5>
                            <h5>Open Source Evangelist</h5>
                            <div className="thumbnail-small">
                                {
                                    logos.map(({node}, index) => (
                                        <a key={index}
                                           className="link"
                                           href="https://medium.com/@rachitabansal">
                                            <img
                                                key={index}
                                                className="logo-img"
                                                border="0"
                                                alt="medium"
                                                src={node.publicURL}
                                                width="30"
                                                height="30"
                                            />
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div
                        className="folder-right">
                        <div
                            className="folder-right-text"
                        >
                            <h1>What I'm doing today</h1>
                            <p>
                                @Federated Wireless, I'm building web applications using React & Redux and Node.js. I've
                                been working on
                                Cloud platforms like AWS and a huge fan of Serverless.
                            </p>
                        </div>
                        <img className="arrow-img" src={url} width="70px" height="70px"/>
                    </div>
                </div>
            </div>
            <div
                className="parallax"
            >
                <div
                    className="folder-right"
                >
                    <div
                        className="folder-right-text"
                    >
                        <h1>
                            Schools I've attended
                        </h1>
                        <h3>
                            M.S. in Information Systems, Northeastern University
                        </h3>
                        <p>
                            At Northeastern, I got the opportunity to work on various technologies and with people from
                            different
                            backgrounds. Some of the interesting projects I worked on - <Link
                            to="https://github.com/bansalrachita/Enron-SocialNetworkAnalytics/blob/master/README.md">Enron
                            Dataset Mining</Link>, <Link
                            to="https://github.com/bansalrachita/Yelp-Friends-Recommendation/blob/master/README.md">Yelp
                            Distributed
                            Recommendation System</Link>, <Link
                            to="https://github.com/bansalrachita/JobTrackingSystem/blob/master/README.md">MEAN Stack Web
                            Application</Link> and <Link
                            to="https://github.com/cloudaddy/cloudaddys-project/blob/master/README.md">Cloudaddy</Link>,
                            a Cloud spplication simulation at
                            scale.
                        </p>
                        <br/>
                        <h3>
                            B. Tech in Electrical & Electronics Engineering, GGSIP University
                        </h3>
                        <p>
                            During this time, I learned about Object Oriented design and worked on my coding skills
                            along with mastering on data structures and Algorithms.
                        </p>
                    </div>
                    <img className="arrow-img" src={url} width="70px" height="70px"/>
                </div>
            </div>
            <div
                className="parallax"
            >
                <div>
                    <div
                        className="folder-right"
                    >
                        <div
                            className="folder-right-text"
                        >
                            <h1>
                                These are some of my adventures...
                            </h1>
                            <div
                                className="folder-right-text"
                            >
                                <ul>
                                    <li>
                                        <Link to="https://github.com/bansalrachita/react-vr">react-vr</Link> - Trying
                                        out
                                        React VR library.
                                    </li>
                                    <li>
                                        <Link to="https://github.com/bansalrachita/scss-basics">scss-basics</Link> -
                                        Learning SCSS
                                    </li>
                                    <li>
                                        <Link
                                            to="https://github.com/bansalrachita/material-ui-pagination-react">material-ui-pagination</Link> -
                                        React
                                        Pagination component with Material-UI
                                    </li>
                                    <li>
                                        <Link
                                            to="https://github.com/bansalrachita/react-todosAppt">Learning React with a
                                            small Todo App</Link> - React
                                        Pagination component with Material-UI
                                    </li>
                                    <li>
                                        <Link
                                            to="https://github.com/bansalrachita/Ilead">Leader board</Link> - React
                                        Web app using Java Spring Security and Hibernate
                                    </li>
                                    <li>
                                        <Link
                                            to="https://github.com/bansalrachita/VaccineDistributionProblem">
                                            Vaccine distribution System
                                        </Link> - Java Swing Application
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export const query = graphql`
    query{
        url: allFile(filter: { name: { eq: "arrow-down" } }){
            edges {
                node {
                    publicURL
                }
            }
        }
        thumbNail: allFile(filter: { name: { eq: "image5" } }){
            edges {
                node {
                    publicURL
                }
            }
        }
        logos: allFile(filter: { extension: { eq: "png" } }){
            edges {
                node {
                    publicURL
                }
            }
        }
    }
`;
export default Layout;
