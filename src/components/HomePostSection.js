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
          <div>
            <h1 style={{fontSize:44}}>Latest Update</h1>
            <h2 style={{}}>Check out our most recent update from the road</h2>
          </div>
          {posts.map((post, index) => (
            <PostCard key={post.title + index} {...post} />
          ))}
        </div>
      </div>
    )
  }
}

export default HomePostSection
