/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        // EN GREVE
        <script src="https://noelmace.github.io/widget-engreve/widget.js" async></script>
    ]);

    setPostBodyComponents([

    ]);

};
