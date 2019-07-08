import React from 'react'
import PropTypes from 'prop-types'
import { TalksPostTemplate } from '../../templates/talks-post'

const TalksPostPreview = ({ entry, widgetFor }) => (
  <TalksPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    talktitle={entry.getIn(['data', 'talktitle'])}
  />
)

TalksPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TalksPostPreview
