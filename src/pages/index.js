import React from "react"
import {graphql} from "gatsby";
import "../common/main.css";
import App from "../components/App";

const Layout = ({data}) => {
    const url = data.url.edges[0].node.publicURL;
    const thumbNail = data.thumbNail.edges[0].node.publicURL;
    const logos = data.logos.edges;
    const summary = data.allMarkdownRemark.edges[1].node;
    const work = data.allMarkdownRemark.edges[0].node;
    const education = data.allMarkdownRemark.edges[2].node;
    const siteMetadata = data.site.siteMetadata;

    return (
        data ?
            <App
                url={url}
                thumbNail={thumbNail}
                logos={logos}
                summary={summary}
                work={work}
                education={education}
                metaData={siteMetadata}/> : null
    );
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
        logos: allFile(sort: {fields:name}, filter: { name: { regex: "/logo[0-9].*/" } }){
            edges {
                node {
                    publicURL
                }
            }
        }
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
              edges {
                    node {
                      id
                      html
                      frontmatter {
                        title
                      }
                      excerpt(truncate: false)
                    }
              }
        } 
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            defaultImage: image,
            siteUrl: url            
          }
        }
    }
`;
export default Layout;
