import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import './App.css'
import Search from './components/Search'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


class Main extends Component {
  render() {
    return (
      <div> 
        <HashRouter>
        <div>
          <Search/>
          <ul className="header">
            <li><NavLink exact to="/">New Post</NavLink></li>
            <li><NavLink to="/contact"> Published Posts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={PostForm}/>
            <Route path="/contact" component={AllPost}/>
          </div>
        </div>
      </HashRouter>
      </div>
      
    );
  }
}

export default Main;