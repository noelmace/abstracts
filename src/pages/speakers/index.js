import React from 'react'

import Layout from '../../components/Layout'
import SpeakersRoll from '../../components/SpeakersRoll';
export default class SpeakersIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/mic-crop.jpg')`,
            backgroundSize: "cover"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #E22936, -0.5rem 0 0 #E22936',
              backgroundColor: '#E22936',
              color: 'white',
              padding: '1rem',
            }}
          >
            Speakers
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <SpeakersRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
