import React, { Component } from 'react';

import { connect } from 'react-redux';

import Post from './Post';
import'./post.css'



class AllPost extends Component {
    render() {
        return (
            
            <div className="box-container">
                <h1>All Posts</h1>
                {this.props.posts.map((post) => <Post key={post.id} post={post} />)}
                
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllPost);