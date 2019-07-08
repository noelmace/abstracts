import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  presentedat,
  selectedat,
  title,
  talktitle,
  authors,
  date,
  type,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p className="is-size-5 has-text-weight-bold is-bold-light">
              {title}
            </p>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{talktitle}</h1>
            <p className="is-size-4 has-text-weight-bold is-bold-light">{description}</p>
            <table class="table is-striped is-fullwidth is-bordered">
              <tbody>
                {authors && authors.length ? (
                  <tr>
                    <td>Authors</td>
                    <td>
                        {authors.map(author => (
                          <div key={author + `author`}>
                            {author}
                          </div>
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
              </tbody>
            </table>
            <h2>Abstract</h2>
            <PostContent content={content} />
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
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  abstract: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  talktitle: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        talktitle={`${post.frontmatter.talktitle}`}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="talktitle"
              content={`${post.frontmatter.talktitle}`}
            />
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
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

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        type
        talktitle
        description
        tags
        selectedat
        presentedat
        authors
      }
    }
  }
`
