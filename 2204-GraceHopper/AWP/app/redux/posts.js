// ------------ imports ------------>
import axios from 'axios';

// ------------ ACTION TYPES ------------>

export const SET_POST = 'SET_POST';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';

//  ------------ ACTION CREATORS ------------>

export const setPosts = (posts) => {
  return {
    type: SET_POST,
    posts: posts,
  };
};

let nextId = 0;
export const _newPost = (post) => {
  return {
    type: NEW_POST,
    id: nextId++,
    post: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId: postId,
  };
};

//------------------ THUNK CREATORS ------------------>

export const fetchPosts = () => async (dispatch) => {
  const { data } = await axios.get('/api/posts');
  dispatch(setPosts(data));
};

export const addNewPost = (post) => {
  return async (dispatch) => {
    const { data } = await axios.post('/api/posts', post);
    dispatch(_newPost(data));
  };
};

export const removePost = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/posts/${id}`);
    dispatch(deletePost(id));
  };
};

// ------------ initial state ------------>

export const initialState = [];

//------------ REDUCER ------------>

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return action.post;
    case NEW_POST:
      return [...state, action.post];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.postId);
    default:
      return state;
  }
};

// ------------ export ------------>
export default postReducer;
