//  ----------- SINGLEPOST COMPONENT (client side, react) ----------->

// ------------------ imports ------------------>

import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../redux/singlePost';

// ------------------ SinglePost class component ------------------>

class SinglePost extends React.Component {
  componentDidMount() {
    this.props.setSinglePost(this.props.match.params.postId);
  }
  // ------------------ render ------------------>
  render() {
    return (
      <div>
        <main>
          <div>Title of Book: {this.props.post.bookTitle}</div>
          <div>Author: {this.props.post.author}</div>
          <div>{this.props.post.coverPageImage} </div>
          <div>Review of the Last Page: {this.props.post.reviewOfLastPage}</div>
          <div>Date Started:{this.props.post.dateStarted}</div>
          <div>Date Completed:{this.props.post.dateCompleted}</div>
          <div>End Rating:{this.props.post.endRating}</div>
        </main>
      </div>
    );
  }
}

// ------------------ mapState ------------------>
const mapState = (state) => {
  return {
    post: state.singlePost,
  };
};
// ------------------ mapDispatch ------------------>
const mapDispatch = (dispatch) => {
  return {
    setSinglePost: (postId) => dispatch(fetchSinglePost(postId)),
  };
};
// ------------------ exports ------------------>
export default connect(mapState, mapDispatch)(SinglePost);
