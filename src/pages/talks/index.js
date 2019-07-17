import React from 'react'

import Layout from '../../components/Layout'
import TalksRoll from '../../components/TalksRoll'

export default class TalksIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/keyboard.jpeg')`,
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
            Our talks
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <TalksRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
