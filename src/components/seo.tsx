import PropTypes from "prop-types";
import React from "react";
import Helmet from "react-helmet";

type SEO = {
  description?: string
  lang?: string
  meta: []
  keywords: {}[]
  title?: string
  author?: string
}
function SEO({ description, lang, meta, keywords, title, author="olajide" }:SEO) {
  // const { site } = useStaticQuery(graphql`
  //   query DefaultSEOQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //         author
  //       }
  //     }
  //   }
  // `);


  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
      title={title}
      titleTemplate={`%s | ${title}`}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default SEO;
