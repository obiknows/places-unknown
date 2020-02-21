import React from 'react'

import PostCard from '../components/PostCard'
import './HomePostSection.css'

class HomePostSection extends React.Component {
  static defaultProps = {
    posts: [],
    title: '',
  }

  render() {
    const { posts, title } = this.props

    return (
      <div className="HomePostSection">
        {title && <h2 className="HomePostSection--Title">{title}</h2>}
        <div className="HomePostSection--Grid">
          {posts.map((post, index) => (
            <PostCard key={post.title + index} {...post} />
          ))}
        </div>
      </div>
    )
  }
}

export default HomePostSection
