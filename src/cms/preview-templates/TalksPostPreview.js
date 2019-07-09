import React from 'react'
import PropTypes from 'prop-types'
import { TalksPostTemplate } from '../../templates/talks-post'

const TalksPostPreview = ({ entry, widgetFor }) => (
  <TalksPostTemplate
    content={widgetFor('body')}
    contentfr={entry.getIn(['data', 'bodyfr'])}
    description={entry.getIn(['data', 'description'])}
    descriptionfr={entry.getIn(['data', 'descriptionfr'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
    talktitle={entry.getIn(['data', 'talktitle'])}
    talktitlefr={entry.getIn(['data', 'talktitlefr'])}
  />
)

TalksPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TalksPostPreview
