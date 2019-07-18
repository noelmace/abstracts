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
    presentedat={entry.getIn(['data', 'presentedat'])}
    selectedat={entry.getIn(['data', 'selectedat'])}
    title={entry.getIn(['data', 'title'])}
    talktitle={entry.getIn(['data', 'talktitle'])}
    talktitlefr={entry.getIn(['data', 'talktitlefr'])}
    authors={entry.getIn(['data', 'authors'])}
    date={entry.getIn(['data', 'date']).toString()}
    type={entry.getIn(['data', 'type'])}
    slides={entry.getIn(['data', 'slides'])}
    videos={entry.getIn(['data', 'videos'])}
  />
)

TalksPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TalksPostPreview
