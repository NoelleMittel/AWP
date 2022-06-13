//  ----------- ALLPOSTS COMPONENT (client side, react) ----------->

// ------------------ imports ------------------>

import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/posts';
import Link from 'react-router-dom/Link';

// ------------------ AllPosts class component ------------------>

export class AllPosts extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  // ------------------ render ------------------>

  render() {
    return (
      <div>
        <div>
          <h2>All Posts</h2>
          <main>
            {this.props.posts.map((post) => {
              return (
                <div key={post.id}>
                  <Link to={`/posts/${post.id}`}>
                    <div>
                      <p>{post.title}</p>
                      <p>{post.author}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </main>
        </div>
      </div>
    );
  }
}

// ------------------ mapState ------------------>

const mapState = (state) => {
  return {
    posts: state.posts,
  };
};

// ------------------ mapDispatch ------------------>

const mapDispatch = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchPosts()),
  };
};
// ------------------ export ------------------>

export default connect(mapState, mapDispatch)(AllPosts);
