/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNav from "./headerNav";
import Footer from './footer'
//import "./layout.scss";
import '../../css/main.css'
import '../../css/styles.css'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <HeaderNav siteTitle={data.site.siteMetadata.title} />
        {children}
      <Footer />
    </>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};


export default Layout
