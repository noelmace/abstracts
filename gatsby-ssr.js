/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        // EN GREVE
        <script
            dangerouslySetInnerHTML={{
                __html: `
                    var DIGITAL_STRIKE_OPTIONS = {
                        showCloseButtonOnFullPageWidget: true,
                        alwaysShowWidget: true
                    };
                `
            }}
        />,
        <script src="https://onestla.tech/widget-engreve/widget.js" async />
    ]);

    setPostBodyComponents([

    ]);

};
