import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AllBlogPosts from './AllBlogPosts';
import MainBlogPage from './MainBlogPage';
import SinglePost from './SinglePost';
import NavBar from './NavBar';

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <NavBar />
          <Route path="/posts/:id" component={SinglePost} />
          <Route exact path="/posts" component={AllBlogPosts} />
          <Route exact path="/" component={MainBlogPage} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
