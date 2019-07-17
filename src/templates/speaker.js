import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import showdown from 'showdown'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const converter = new showdown.Converter()

export const SpeakerTemplate = ({
  content,
  contentComponent,
  contentfr,
  firstname,
  lastname,
  jobtitle,
  alias,
  picture,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  const [isFr, setFrState] = useState(false);

  const toggleFr = () => setFrState(!isFr);

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="colmuns">
              <div className="column is-10 is-offset-1">
                <div className="columns is-mobile is-vcentered">
                  <div className="column is-four-fifths-desktop is-three-quarters-tablet is-two-thirds-mobile">
                    <h1 className="title">{firstname} {lastname}</h1>
                    <p className="subtitle">{jobtitle}</p>
                  </div>
                  <div className="column">
                    {picture ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: picture,
                            alt: `profile picture of ${
                              alias
                            }`
                          }}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        {helmet || ''}
        
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="field">
                <input id="showfr" type="checkbox" name="showfr" className="switch is-primary" checked={isFr} onChange={toggleFr}></input>
                <label htmlFor="showfr">French translation (where available)</label>
              </div>
              
              <h2>Bio</h2>
              <PostContent content={(isFr && contentfr && converter.makeHtml(contentfr)) || content} />
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

SpeakerTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  alias: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  jobtitle: PropTypes.string,
  helmet: PropTypes.object,
}

const Speaker = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SpeakerTemplate
        content={post.html}
        contentfr={post.frontmatter.bodyfr}
        contentComponent={HTMLContent}
        firstname={post.frontmatter.firstname}
        lastname={post.frontmatter.lastname}
        jobtitle={post.frontmatter.jobtitle}
        alias={post.frontmatter.alias}
        picture={post.frontmatter.picture}
        helmet={
          <Helmet titleTemplate="%s | Talks">
            <title>{`${post.frontmatter.firstname} ${post.frontmatter.lastname}`}</title>
          </Helmet>
        }
      />
    </Layout>
  )
}

Speaker.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Speaker

export const pageQuery = graphql`
  query SpeakersByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        bodyfr
        jobtitle
        firstname
        lastname
        alias
        picture {
          childImageSharp {
            fluid(maxWidth: 200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
