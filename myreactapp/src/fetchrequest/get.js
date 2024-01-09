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
        axios.get("https://randomuser.me/api/")
            .then(response => {
                // Assuming you want to extract results from the API response
                const posts = response.data.results;

                this.setState({
                    posts: posts,
                    error: null // Reset error on successful fetch
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

        return (
            <div>
                {error ? (
                    <div>{error}</div>
                ) : (
                    <div>
                        {posts.length ? (
                            posts.map(post => (
                                <div key={post.uuid}>
                                    <p>{post.name.first} {post.name.last}</p>
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
