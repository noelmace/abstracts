import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SpeakersRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: speakers } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {speakers &&
          speakers.map(({ node: speaker }) => (
            <div className="is-parent column is-6" key={speaker.id}>
              <article
                className="talks-list-item tile is-child box notification"
              >
                <header>
                  {speaker.frontmatter.picture ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: speaker.frontmatter.picture,
                          alt: `profile picture of ${
                            speaker.frontmatter.alias
                          }`,
                          style: { maxWidth: '5em' }
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta has-text-centered">
                    <Link
                      className="title has-text-primary is-size-4 is-block"
                      to={speaker.fields.slug}
                    >
                      {speaker.frontmatter.firstname} {speaker.frontmatter.lastname}
                    </Link>
                    <span className="subtitle is-size-5 is-block">
                      {speaker.frontmatter.jobtitle}
                    </span>
                  </p>
                </header>
                <p>
                  {speaker.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={speaker.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

SpeakersRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SpearkersRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "speaker" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                alias
                firstname
                lastname
                jobtitle
                picture {
                  childImageSharp {
                    fluid(maxWidth: 80, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SpeakersRoll data={data} count={count} />}
  />
)
