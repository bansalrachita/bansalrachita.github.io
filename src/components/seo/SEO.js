import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { PropTypes } from 'prop-types';

export const SEO = ({ data }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{data.siteMetadata.defaultTitle}</title>
      <link rel="canonical" href={data.siteMetadata.siteMetadata} />
      <meta
        property="og:description"
        content={data.siteMetadata.defaultDescription}
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href={`${data.siteMetadata.defaultImage}`}
      />
    </Helmet>
  );
};

SEO.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query siteMetaDataQuery {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl: url
      }
    }
  }
`;
