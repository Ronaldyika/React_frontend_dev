import axios from "axios";
import React, { Component } from "react";

class GetData extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            error: null // Initialize error state
        };
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/book/libarians/")
            .then(response => {
                const posts = response.data;

                this.setState({
                    posts: posts,
                    error: null 
                });
            })
            .catch(error => {
                this.setState({
                    error: "Problem in the fetch"
                });
            });
    }

    render() {
        const { posts, error } = this.state;
        if (!posts || !posts.length) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {error ? (
                    <div>{error}</div>
                ) : (
                    <div>
                        {posts.length ? (
                            posts.map(post => (
                                <div key={post.id}>
                                    <p>Name: {post.name}</p>
                                    <p>Description: {post.email}</p>
                                </div>
                            ))
                        ) : (
                            <div>No posts available</div>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default GetData;
