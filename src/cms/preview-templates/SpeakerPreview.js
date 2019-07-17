import React from 'react'
import PropTypes from 'prop-types'
import { SpeakerTemplate } from '../../templates/speaker';

const TalksPostPreview = ({ entry, widgetFor }) => (
  <SpeakerTemplate
    content={widgetFor('body')}
    contentfr={entry.getIn(['data', 'bodyfr'])}
    alias={entry.getIn(['data', 'alias'])}
    firstname={entry.getIn(['data', 'firstname'])}
    lastname={entry.getIn(['data', 'lastname'])}
    jobtitle={entry.getIn(['data', 'jobtitle'])}
    picture={entry.getIn(['data', 'picture'])}
    twitterUrl={entry.getIn(['data', 'twitter'])}
    githubUrl={entry.getIn(['data', 'github'])}
    linkedinUrl={entry.getIn(['data', 'linkedin'])}
    websiteUrl={entry.getIn(['data', 'website'])}
    previoustalks={entry.getIn(['data', 'previoustalks'])}
  />
)

TalksPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TalksPostPreview
