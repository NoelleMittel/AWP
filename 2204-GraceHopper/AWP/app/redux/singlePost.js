// ------------ imports ------------>
import axios from 'axios';

// ------------ ACTION TYPES ------------>
export const SET_SINGLE_POST = 'SET_SINGLE_POST';

//  ------------ ACTION CREATORS ------------>

export const setSinglePost = (post) => {
  return {
    type: SET_SINGLE_POST,
    post: post,
  };
};

// ------------ THUNK CREATORS ------------>

export const fetchSinglePost = (id) => async (dispatch) => {
  const { data } = await axios.get(`/api/posts/${id}`);
  dispatch(setSinglePost(data));
};

// ------------ initial state ------------>

export const initialState = [];

// ------------ REDUCER ------------>

export const singlePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SINGLE_POST:
      return action.post;
    default:
      return state;
  }
};

export default singlePostReducer;
