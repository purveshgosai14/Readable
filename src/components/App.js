import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import AppNav from './AppNav';
import PostList from './PostList'
import PostDetail from './PostDetail'
import CommentList from './CommentList'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AppNav/>
        <Route exact path="/" component={PostList} />
        <Route exact path="/:category" component={PostList}/>
        <Route path="/:category/:post_id" render={props => (
          <div>
            <PostDetail {...props} />
            <CommentList {...props} />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
