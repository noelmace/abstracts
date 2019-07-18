import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import showdown from 'showdown'

const converter = new showdown.Converter()

export const TalksPostTemplate = ({
  content,
  contentComponent,
  contentfr,
  description,
  descriptionfr,
  tags,
  presentedat,
  selectedat,
  title,
  talktitle,
  talktitlefr,
  authors,
  date,
  type,
  slides,
  videos,
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
                <h1 className="title">{(isFr && talktitlefr) || talktitle}</h1>
                <p className="subtitle">{(isFr && descriptionfr) || description}</p>
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
              <p className="is-size-5 has-text-weight-bold is-bold-light">
                {title}
              </p>
              <div className="field">
                <input id="showfr" type="checkbox" name="showfr" className="switch is-primary" checked={isFr} onChange={toggleFr}></input>
                <label htmlFor="showfr">French translation (where available)</label>
              </div>
              <table className="table is-striped is-fullwidth is-bordered">
                <tbody>
                  {authors && authors.length ? (
                    <tr>
                      <td>Authors</td>
                      <td>
                          {authors.map(author => (
                            <Link to={`/speakers/${author}`} key={author + `author`} className="is-block">
                              {author}
                            </Link>
                          ))}
                      </td>
                    </tr>
                  ) : null}
                  <tr>
                    <td>Last Major Update</td>
                    <td>{date}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{type}</td>
                  </tr>
                  {selectedat && selectedat.length ? (
                    <tr>
                      <td>Will be given at</td>
                      <td>
                          {selectedat.map(event => (
                            <div key={event + `event`}>
                              {event}
                            </div>
                          ))}
                      </td>
                    </tr>
                  ) : null}
                  {presentedat && presentedat.length ? (
                    <tr>
                      <td>Already given at</td>
                      <td>
                          {presentedat.map(event => (
                            <div key={event + `event`}>
                              {event}
                            </div>
                          ))}
                      </td>
                    </tr>
                  ) : null}
                  {slides ? (
                    <tr>
                      <td>Slides</td>
                      <td>
                          <Link to={slides}>{slides}</Link>
                      </td>
                    </tr>
                  ) : null}
                  {videos && videos.length ? (
                    <tr>
                      <td>Videos</td>
                      <td>
                          {videos.map(video => (
                            <Link to={video}>
                              {video}
                            </Link>
                          ))}
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
              <PostContent content={(isFr && contentfr && converter.makeHtml(contentfr)) || content} danger={isFr && !!contentfr} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

TalksPostTemplate.propTypes = {
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  descriptionfr: PropTypes.string,
  title: PropTypes.string,
  talktitle: PropTypes.string,
  talktitlefr: PropTypes.string,
  helmet: PropTypes.object,
}

const TalksPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TalksPostTemplate
        content={post.html}
        contentfr={post.frontmatter.bodyfr}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        descriptionfr={post.frontmatter.descriptionfr}
        talktitle={post.frontmatter.talktitle}
        talktitlefr={post.frontmatter.talktitlefr}
        slides={post.frontmatter.slides}
        videos={post.frontmatter.videos}
        helmet={
          <Helmet titleTemplate="%s | Talks">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="talktitle"
              content={`${post.frontmatter.talktitle}`}
            />
            <meta
              name="talktitlefr"
              content={`${post.frontmatter.talktitlefr}`}
            />
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              name="descriptionfr"
              content={`${post.frontmatter.descriptionfr}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        selectedat={post.frontmatter.selectedat}
        presentedat={post.frontmatter.presentedat}
        title={post.frontmatter.title}
        authors={post.frontmatter.authors}
        date={post.frontmatter.date}
        type={post.frontmatter.type}
      />
    </Layout>
  )
}

TalksPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default TalksPost

export const pageQuery = graphql`
  query TalksPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        bodyfr
        title
        type
        talktitle
        talktitlefr
        description
        descriptionfr
        tags
        selectedat
        presentedat
        authors
        slides
        videos
      }
    }
  }
`
