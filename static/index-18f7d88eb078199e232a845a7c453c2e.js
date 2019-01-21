import React from "react"
import {graphql, Link} from "gatsby";
import Header from "../components/Header.js";

const Layout = ({data}) => {
    const {edges} = data.allMarkdownRemark;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "avenir",
                width: "100vw",
                height: "100vh",
                backgroundImg: "url(\"./image1.jpg\")",
                backgroundColor: "#7fd0d5",
                margin: "0"
            }}
        >
            <div
                style={{
                    background: "rgba(255, 255, 255, 0.36)",
                    flex: "1 1 auto",
                    margin: "60px 40px 10px",
                    border: "1px solid #9c9a9afc",
                    boxShadow: "3px 2px 13px 16px #403e3e61",
                    minHeight: "500px"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            border: "1px solid",
                            width: "30%",
                            alignItems: "center"
                        }}>
                        <div style={{
                            background:"rgba(239, 239, 56, 0.6509803921568628)",
                            width: "9rem",
                            height: "9rem",
                            borderRadius: "50%",
                            margin: "20px"
                        }}>

                        </div>
                    </div>
                    <div
                    style={{
                        flex: "2 1 auto",
                        border: "1px solid",
                    }}
                    >

                    </div>
                </div>
            </div>
        </div>)
};

export const query = graphql`
    query{
        allMarkdownRemark(sort:{fields:frontmatter___date}){
            edges{
                node{
                    frontmatter{
                        title,
                        path
                    }
                }
            }
        }
    }
`;
export default Layout;
