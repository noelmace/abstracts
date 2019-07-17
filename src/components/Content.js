import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className, danger }) => {
  return danger ? (
    <div className={className} dangerouslySetInnerHTML={{__html: content }}></div>
  ) : (
    <div className={className}>{content}</div>
  );
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
  danger: PropTypes.bool
}

HTMLContent.propTypes = Content.propTypes

export default Content
